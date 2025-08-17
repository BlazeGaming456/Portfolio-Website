import React, { useRef } from 'react'
import Editor from '@monaco-editor/react'

const CodeEditor = ({ language, code, setCode, readOnly = false }) => {
  const editorRef = useRef(null)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor

    // Base dark theme
    monaco.editor.defineTheme('custom-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'string', foreground: 'bbbbbb' } // gray for normal strings
      ],
      colors: {}
    })
    monaco.editor.setTheme('custom-dark')

    let decorations = []

    // Register link provider
    monaco.languages.registerLinkProvider(language, {
      provideLinks: () => {
        const links = []
        const regex = /(https?:\/\/[^\s"]+|mailto:[^\s"]+|\/resume\.pdf)/g
        const lines = code.split('\n')

        lines.forEach((line, i) => {
          let m
          while ((m = regex.exec(line)) !== null) {
            let url = m[0]

            if (url === '/resume.pdf') {
              url = `${window.location.origin}/resume.pdf`
            }

            const range = new monaco.Range(
              i + 1,
              m.index + 2, // inside quotes
              i + 1,
              m.index + m[0].length + 1
            )

            links.push({ range, url })

            // Apply custom style via CSS
            decorations = editor.deltaDecorations(decorations, [
              {
                range,
                options: { inlineClassName: 'link-highlight' }
              }
            ])
          }
        })

        return { links }
      }
    })
  }

  return (
    <Editor
      height='500px'
      language={language}
      theme='custom-dark'
      value={code}
      onChange={newValue => setCode(newValue)}
      options={{
        readOnly: true,
        fontSize: 16,
        fontFamily: 'Fira Code, monospace',
        lineHeight: 24,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        padding: { top: 16 },
        roundedSelection: true,
        automaticLayout: true,
        links: true,
        wordWrap: 'on' // ✅ enables code wrap
      }}
      onMount={handleEditorDidMount}
    />
  )
}

export default CodeEditor
