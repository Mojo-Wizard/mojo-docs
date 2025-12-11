import React, {useState} from 'react';
import styles from './styles.module.css';

const sampleCode = `fn main():
    print("Hello from Mojo!")

fn double(value: Int) -> Int:
    return value * 2`;

function mockExecute(code) {
  const printMatches = [...code.matchAll(/print\((?:\"|')(.*?)(?:\"|')\)/g)];
  if (printMatches.length > 0) {
    return printMatches.map((match) => match[1]).join('\n');
  }
  if (/return\s+.+/.test(code)) {
    return '(mock) Functions compiled successfully.';
  }
  return '(mock) Program executed with no output.';
}

export default function MojoPlaygroundMock() {
  const [code, setCode] = useState(sampleCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Compiling Mojo (mock)...');
    setTimeout(() => {
      setOutput(mockExecute(code));
      setIsRunning(false);
    }, 400);
  };

  return (
    <div className={styles.playground}>
      <div className={styles.header}>
        <p className={styles.title}>Mojo Playground (mock)</p>
        <button
          type="button"
          className={styles.runButton}
          onClick={handleRun}
          disabled={isRunning}>
          {isRunning ? 'Running…' : 'Run'}
        </button>
      </div>
      <textarea
        className={styles.editor}
        value={code}
        onChange={(event) => setCode(event.target.value)}
        spellCheck={false}
      />
      <div className={styles.output}>
        <div className={styles.outputLabel}>Output</div>
        <pre>{output || '(mock) No output yet.'}</pre>
      </div>
    </div>
  );
}
