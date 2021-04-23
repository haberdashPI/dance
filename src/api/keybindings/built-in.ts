//
// Content below this line was auto-generated by built-in.build.ts. Do not edit manually.

const builtinKeybindings = [
  {
    key: "Shift+7",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Align selections",
    command: "dance.edit.align",
  },
  {
    key: "Alt+`",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Swap case",
    command: "dance.edit.case.swap",
  },
  {
    key: "`",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Transform to lower case",
    command: "dance.edit.case.toLower",
  },
  {
    key: "Shift+`",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Transform to upper case",
    command: "dance.edit.case.toUpper",
  },
  {
    key: "Shift+Alt+7",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Copy indentation",
    command: "dance.edit.copyIndentation",
  },
  {
    key: "Shift+Alt+,",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Deindent selected lines",
    command: "dance.edit.deindent",
  },
  {
    key: "Shift+,",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Deindent selected lines (including incomplete indent)",
    command: "dance.edit.deindent.withIncomplete",
  },
  {
    key: "Alt+D",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Delete",
    command: "dance.edit.delete",
  },
  {
    key: "Alt+C",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Delete and switch to Insert",
    command: "dance.edit.delete-insert",
  },
  {
    key: "Shift+.",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Indent selected lines",
    command: "dance.edit.indent",
  },
  {
    key: "Shift+Alt+.",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Indent selected lines (including empty lines)",
    command: "dance.edit.indent.withEmpty",
  },
  {
    key: "Shift+Alt+R",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert contents of register",
    command: "dance.edit.insert",
  },
  {
    key: "Alt+J",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Join lines",
    command: "dance.edit.join",
  },
  {
    key: "Shift+Alt+J",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Join lines and select inserted separators",
    command: "dance.edit.join.select",
  },
  {
    key: "Shift+Alt+O",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert new line above each selection",
    command: "dance.edit.newLine.above",
  },
  {
    key: "Shift+O",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert new line above and switch to insert",
    command: "dance.edit.newLine.above.insert",
  },
  {
    key: "Alt+O",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert new line below each selection",
    command: "dance.edit.newLine.below",
  },
  {
    key: "O",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert new line below and switch to insert",
    command: "dance.edit.newLine.below.insert",
  },
  {
    key: "P",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Paste after",
    command: "dance.edit.paste.after",
  },
  {
    key: "Alt+P",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Paste after and select",
    command: "dance.edit.paste.after.select",
  },
  {
    key: "Shift+P",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Paste before",
    command: "dance.edit.paste.before",
  },
  {
    key: "Shift+Alt+P",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Paste before and select",
    command: "dance.edit.paste.before.select",
  },
  {
    key: "R",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Replace characters",
    command: "dance.edit.replaceCharacters",
  },
  {
    key: "Ctrl+R",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Pick register and replace",
    command: "dance.edit.selectRegister-insert",
  },
  {
    key: "Ctrl+R",
    when: "editorTextFocus && dance.mode == 'insert'",
    title: "Pick register and replace",
    command: "dance.edit.selectRegister-insert",
  },
  {
    key: "D",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Copy and delete",
    command: "dance.edit.yank-delete",
  },
  {
    key: "C",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Copy, delete and switch to Insert",
    command: "dance.edit.yank-delete-insert",
  },
  {
    key: "Shift+R",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Copy and replace",
    command: "dance.edit.yank-replace",
  },
  {
    key: "Q",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Replay recording",
    command: "dance.history.recording.play",
  },
  {
    key: "Shift+Q",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Start recording",
    command: "dance.history.recording.start",
  },
  {
    key: "Escape",
    when: "editorTextFocus && dance.mode == 'normal' && dance.isRecording",
    title: "Stop recording",
    command: "dance.history.recording.stop",
  },
  {
    key: "Shift+U",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Redo",
    command: "dance.history.redo",
  },
  {
    key: "Shift+Alt+U",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Redo a change of selections",
    command: "dance.history.redo.selections",
  },
  {
    key: ".",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Repeat last edit without a command",
    command: "dance.history.repeat.edit",
  },
  {
    key: "Alt+.",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Repeat last object selection",
    command: "dance.history.repeat.objectSelection",
  },
  {
    key: "U",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Undo",
    command: "dance.history.undo",
  },
  {
    key: "Alt+U",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Undo a change of selections",
    command: "dance.history.undo.selections",
  },
  {
    key: "Escape",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Cancel Dance operation",
    command: "dance.cancel",
  },
  {
    key: "Escape",
    when: "editorTextFocus && dance.mode == 'input'",
    title: "Cancel Dance operation",
    command: "dance.cancel",
  },
  {
    key: "Shift+'",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select register for next command",
    command: "dance.selectRegister",
  },
  {
    key: "0",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 0 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 0,
    },
  },
  {
    key: "1",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 1 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 1,
    },
  },
  {
    key: "2",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 2 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 2,
    },
  },
  {
    key: "3",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 3 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 3,
    },
  },
  {
    key: "4",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 4 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 4,
    },
  },
  {
    key: "5",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 5 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 5,
    },
  },
  {
    key: "6",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 6 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 6,
    },
  },
  {
    key: "7",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 7 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 7,
    },
  },
  {
    key: "8",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 8 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 8,
    },
  },
  {
    key: "9",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add the digit 9 to the counter",
    command: "dance.updateCount",
    args: {
      addDigits: 9,
    },
  },
  {
    key: "Shift+;",
    when: "editorTextFocus && dance.mode == 'normal'",
    command: "workbench.action.showCommands",
  },
  {
    key: "A",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert after",
    command: "dance.modes.insert.after",
  },
  {
    key: "I",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert before",
    command: "dance.modes.insert.before",
  },
  {
    key: "Shift+A",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert at line end",
    command: "dance.modes.insert.lineEnd",
  },
  {
    key: "Shift+I",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Insert at line start",
    command: "dance.modes.insert.lineStart",
  },
  {
    key: "Escape",
    when: "editorTextFocus && dance.mode == 'insert'",
    title: "Set mode to Normal",
    command: "dance.modes.set.normal",
  },
  {
    key: "Ctrl+V",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Temporart Insert mode",
    command: "dance.modes.set.temporarily.insert",
  },
  {
    key: "Ctrl+V",
    when: "editorTextFocus && dance.mode == 'insert'",
    title: "Temporary Normal mode",
    command: "dance.modes.set.temporarily.normal",
  },
  {
    key: "/",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Search",
    command: "dance.search.",
  },
  {
    key: "Shift+/",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Search (add)",
    command: "dance.search.add",
  },
  {
    key: "Alt+/",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Search backward",
    command: "dance.search.backward",
  },
  {
    key: "Shift+Alt+/",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Search backward (add)",
    command: "dance.search.backward.add",
  },
  {
    key: "N",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select next match",
    command: "dance.search.next",
  },
  {
    key: "Shift+N",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add next match",
    command: "dance.search.next.add",
  },
  {
    key: "Alt+N",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select previous match",
    command: "dance.search.previous",
  },
  {
    key: "Shift+Alt+N",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Add previous match",
    command: "dance.search.previous.add",
  },
  {
    key: "Shift+Alt+8",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Search current selection",
    command: "dance.search.selection",
  },
  {
    key: "Shift+8",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Search current selection (smart)",
    command: "dance.search.selection.smart",
  },
  {
    key: "Alt+A",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select whole object",
    command: "dance.seek.askObject",
  },
  {
    key: "Alt+A",
    when: "editorTextFocus && dance.mode == 'insert'",
    title: "Select whole object",
    command: "dance.seek.askObject",
  },
  {
    key: "]",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to whole object end",
    command: "dance.seek.askObject.end",
  },
  {
    key: "Shift+]",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to whole object end",
    command: "dance.seek.askObject.end",
  },
  {
    key: "Alt+I",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select inner object",
    command: "dance.seek.askObject.inner",
  },
  {
    key: "Alt+I",
    when: "editorTextFocus && dance.mode == 'insert'",
    title: "Select inner object",
    command: "dance.seek.askObject.inner",
  },
  {
    key: "Alt+]",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to inner object end",
    command: "dance.seek.askObject.inner.end",
  },
  {
    key: "Shift+Alt+]",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to inner object end",
    command: "dance.seek.askObject.inner.end.extend",
  },
  {
    key: "Alt+[",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to inner object start",
    command: "dance.seek.askObject.inner.start",
  },
  {
    key: "Shift+Alt+[",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to inner object start",
    command: "dance.seek.askObject.inner.start.extend",
  },
  {
    key: "[",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to whole object start",
    command: "dance.seek.askObject.start",
  },
  {
    key: "Shift+[",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to whole object start",
    command: "dance.seek.askObject.start",
  },
  {
    key: "T",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to character (excluded)",
    command: "dance.seek.character",
  },
  {
    key: "Alt+T",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to character (excluded, backward)",
    command: "dance.seek.character.backward",
  },
  {
    key: "Shift+T",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to character (excluded)",
    command: "dance.seek.character.extend",
  },
  {
    key: "Shift+Alt+T",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to character (excluded, backward)",
    command: "dance.seek.character.extend.backward",
  },
  {
    key: "F",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to character (included)",
    command: "dance.seek.character.included",
  },
  {
    key: "Alt+F",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to character (included, backward)",
    command: "dance.seek.character.included.backward",
  },
  {
    key: "Shift+F",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to character (included)",
    command: "dance.seek.character.included.extend",
  },
  {
    key: "Shift+Alt+F",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to character (included, backward)",
    command: "dance.seek.character.included.extend.backward",
  },
  {
    key: "M",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to next enclosing character",
    command: "dance.seek.enclosing",
  },
  {
    key: "Alt+M",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to previous enclosing character",
    command: "dance.seek.enclosing.backward",
  },
  {
    key: "Shift+M",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to next enclosing character",
    command: "dance.seek.enclosing.extend",
  },
  {
    key: "Shift+Alt+M",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to previous enclosing character",
    command: "dance.seek.enclosing.extend.backward",
  },
  {
    key: "W",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to next word start",
    command: "dance.seek.word",
  },
  {
    key: "B",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to previous word start",
    command: "dance.seek.word.backward",
  },
  {
    key: "Shift+W",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to next word start",
    command: "dance.seek.word.extend",
  },
  {
    key: "Shift+B",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to previous word start",
    command: "dance.seek.word.extend.backward",
  },
  {
    key: "Alt+W",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to next non-whitespace word start",
    command: "dance.seek.word.ws",
  },
  {
    key: "Alt+B",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to previous non-whitespace word start",
    command: "dance.seek.word.ws.backward",
  },
  {
    key: "Shift+Alt+W",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to next non-whitespace word start",
    command: "dance.seek.word.ws.extend",
  },
  {
    key: "Shift+Alt+B",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to previous non-whitespace word start",
    command: "dance.seek.word.ws.extend.backward",
  },
  {
    key: "E",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to next word end",
    command: "dance.seek.wordEnd",
  },
  {
    key: "Shift+E",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to next word end",
    command: "dance.seek.wordEnd.extend",
  },
  {
    key: "Alt+E",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to next non-whitespace word end",
    command: "dance.seek.wordEnd.ws",
  },
  {
    key: "Shift+Alt+E",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to next non-whitespace word end",
    command: "dance.seek.wordEnd.ws.extend",
  },
  {
    key: "Shift+5",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select whole buffer",
    command: "dance.select.buffer",
  },
  {
    key: "Shift+J",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend down",
    command: "dance.select.down.extend",
  },
  {
    key: "Shift+Down",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend down",
    command: "dance.select.down.extend",
  },
  {
    key: "J",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Jump down",
    command: "dance.select.down.jump",
  },
  {
    key: "Down",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Jump down",
    command: "dance.select.down.jump",
  },
  {
    key: "Shift+H",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend left",
    command: "dance.select.left.extend",
  },
  {
    key: "Shift+Left",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend left",
    command: "dance.select.left.extend",
  },
  {
    key: "H",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Jump left",
    command: "dance.select.left.jump",
  },
  {
    key: "Left",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Jump left",
    command: "dance.select.left.jump",
  },
  {
    key: "X",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select line below",
    command: "dance.select.line.below",
  },
  {
    key: "Shift+X",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to line below",
    command: "dance.select.line.below.extend",
  },
  {
    key: "Alt+L",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to line end",
    command: "dance.select.lineEnd",
  },
  {
    key: "End",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to line end",
    command: "dance.select.lineEnd",
  },
  {
    key: "Shift+Alt+L",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to line end",
    command: "dance.select.lineEnd.extend",
  },
  {
    key: "Shift+End",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to line end",
    command: "dance.select.lineEnd.extend",
  },
  {
    key: "Alt+H",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to line start",
    command: "dance.select.lineStart",
  },
  {
    key: "Home",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select to line start",
    command: "dance.select.lineStart",
  },
  {
    key: "Shift+Alt+H",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to line start",
    command: "dance.select.lineStart.extend",
  },
  {
    key: "Shift+Home",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to line start",
    command: "dance.select.lineStart.extend",
  },
  {
    key: "Shift+L",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend right",
    command: "dance.select.right.extend",
  },
  {
    key: "Shift+Right",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend right",
    command: "dance.select.right.extend",
  },
  {
    key: "L",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Jump right",
    command: "dance.select.right.jump",
  },
  {
    key: "Right",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Jump right",
    command: "dance.select.right.jump",
  },
  {
    key: "Shift+G",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to",
    command: "dance.select.to.extend",
  },
  {
    key: "G",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Go to",
    command: "dance.select.to.jump",
  },
  {
    key: "Shift+K",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend up",
    command: "dance.select.up.extend",
  },
  {
    key: "Shift+Up",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend up",
    command: "dance.select.up.extend",
  },
  {
    key: "K",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Jump up",
    command: "dance.select.up.jump",
  },
  {
    key: "Up",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Jump up",
    command: "dance.select.up.jump",
  },
  {
    key: "Ctrl+F",
    when: "editorTextFocus && dance.mode == 'normal'",
    command: "dance.select.vertically",
    args: {
      by: "page",
      direction: 1,
    },
  },
  {
    key: "Ctrl+F",
    when: "editorTextFocus && dance.mode == 'insert'",
    command: "dance.select.vertically",
    args: {
      by: "page",
      direction: 1,
    },
  },
  {
    key: "Ctrl+D",
    when: "editorTextFocus && dance.mode == 'normal'",
    command: "dance.select.vertically",
    args: {
      by: "halfPage",
      direction: 1,
    },
  },
  {
    key: "Ctrl+D",
    when: "editorTextFocus && dance.mode == 'insert'",
    command: "dance.select.vertically",
    args: {
      by: "halfPage",
      direction: 1,
    },
  },
  {
    key: "Ctrl+B",
    when: "editorTextFocus && dance.mode == 'normal'",
    command: "dance.select.vertically",
    args: {
      by: "page",
      direction: -1,
    },
  },
  {
    key: "Ctrl+B",
    when: "editorTextFocus && dance.mode == 'insert'",
    command: "dance.select.vertically",
    args: {
      by: "page",
      direction: -1,
    },
  },
  {
    key: "Ctrl+U",
    when: "editorTextFocus && dance.mode == 'normal'",
    command: "dance.select.vertically",
    args: {
      by: "halfPage",
      direction: -1,
    },
  },
  {
    key: "Ctrl+U",
    when: "editorTextFocus && dance.mode == 'insert'",
    command: "dance.select.vertically",
    args: {
      by: "halfPage",
      direction: -1,
    },
  },
  {
    key: "Alt+;",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Change direction of selections",
    command: "dance.selections.changeDirection",
  },
  {
    key: "Alt+Space",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Clear main selections",
    command: "dance.selections.clear.main",
  },
  {
    key: "Space",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Clear secondary selections",
    command: "dance.selections.clear.secondary",
  },
  {
    key: "Shift+C",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Copy selections below",
    command: "dance.selections.copy",
  },
  {
    key: "Shift+Alt+C",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Copy selections above",
    command: "dance.selections.copy.above",
  },
  {
    key: "Alt+X",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Extend to lines",
    command: "dance.selections.extendToLines",
  },
  {
    key: "Shift+Alt+;",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Forward selections",
    command: "dance.selections.faceForward",
  },
  {
    key: "Shift+4",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Filter selections",
    command: "dance.selections.filter",
  },
  {
    key: "Alt+K",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Keep matching selections",
    command: "dance.selections.filter.regexp",
  },
  {
    key: "Shift+Alt+K",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Clear matching selections",
    command: "dance.selections.filter.regexp.inverse",
  },
  {
    key: "Shift+Alt+-",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Merge contiguous selections",
    command: "dance.selections.merge",
  },
  {
    key: "Shift+Alt+\\",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Pipe selections",
    command: "dance.selections.pipe",
  },
  {
    key: "Shift+1",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Pipe and append",
    command: "dance.selections.pipe.append",
  },
  {
    key: "Shift+Alt+1",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Pipe and prepend",
    command: "dance.selections.pipe.prepend",
  },
  {
    key: "Shift+\\",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Pipe and replace",
    command: "dance.selections.pipe.replace",
  },
  {
    key: ";",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Reduce selections to their cursor",
    command: "dance.selections.reduce",
  },
  {
    key: "Shift+Alt+S",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Reduce selections to their ends",
    command: "dance.selections.reduce.edges",
  },
  {
    key: "Z",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Restore selections",
    command: "dance.selections.restore",
  },
  {
    key: "Alt+Z",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Combine register selections with current ones",
    command: "dance.selections.restore.withCurrent",
  },
  {
    key: "Shift+Alt+Z",
    when: "editorTextFocus && dance.mode == 'normal'",
    command: "dance.selections.restore.withCurrent",
    args: {
      reverse: true,
    },
  },
  {
    key: "Shift+Z",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Save selections",
    command: "dance.selections.save",
  },
  {
    key: "Y",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Copy selections text",
    command: "dance.selections.saveText",
  },
  {
    key: "S",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Select within selections",
    command: "dance.selections.select",
  },
  {
    key: "Shift+S",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Split selections",
    command: "dance.selections.split",
  },
  {
    key: "Alt+S",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Split selections at line boundaries",
    command: "dance.selections.splitLines",
  },
  {
    key: "Enter",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Toggle selection indices",
    command: "dance.selections.toggleIndices",
  },
  {
    key: "Shift+Alt+X",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Trim lines",
    command: "dance.selections.trimLines",
  },
  {
    key: "Shift+-",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Trim whitespace",
    command: "dance.selections.trimWhitespace",
  },
  {
    key: "Shift+9",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Rotate selections clockwise",
    command: "dance.selections.rotate.both",
  },
  {
    key: "Shift+0",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Rotate selections counter-clockwise",
    command: "dance.selections.rotate.both.reverse",
  },
  {
    key: "Shift+Alt+9",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Rotate selections clockwise (selections only)",
    command: "dance.selections.rotate.selections",
  },
  {
    key: "Shift+Alt+0",
    when: "editorTextFocus && dance.mode == 'normal'",
    title: "Rotate selections counter-clockwise (selections only)",
    command: "dance.selections.rotate.selections.reverse",
  },
];
