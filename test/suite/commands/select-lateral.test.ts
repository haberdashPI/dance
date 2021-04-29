import * as vscode from "vscode";

import { ExpectedDocument } from "../utils";

const executeCommand = vscode.commands.executeCommand;

suite("select-lateral.md", function () {
  // Set up document.
  let document: vscode.TextDocument,
      editor: vscode.TextEditor;

  this.beforeAll(async () => {
    document = await vscode.workspace.openTextDocument();
    editor = await vscode.window.showTextDocument(document);

    await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });
  });

  this.afterAll(async () => {
    await executeCommand("workbench.action.closeActiveEditor");
  });

  // Each test sets up using its previous document, and notifies its
  // dependents that it is done by writing its document to `documents`.
  // This ensures that tests are executed in the right order, and that we skip
  // tests whose dependencies failed.
  const notifyDependents: Record<string, (document: ExpectedDocument | undefined) => void> = {},
        documents: Record<string, Promise<ExpectedDocument | undefined>> = {
          "initial": Promise.resolve(ExpectedDocument.parseIndented(12, `\
            foo
            bar
               ^ 0
            baz
            quxxx
          `)),
          "blank-initial": Promise.resolve(ExpectedDocument.parseIndented(12, `\
            foo

            bar
               ^ 0

          `)),
          "initial-3": Promise.resolve(ExpectedDocument.parseIndented(12, `\
            foo

            ^ 0
            bar
            baz
          `)),

          "left": new Promise((resolve) => notifyDependents["left"] = resolve),
          "right": new Promise((resolve) => notifyDependents["right"] = resolve),
          "up": new Promise((resolve) => notifyDependents["up"] = resolve),
          "up-skip-eol": new Promise((resolve) => notifyDependents["up-skip-eol"] = resolve),
          "down": new Promise((resolve) => notifyDependents["down"] = resolve),
          "down-skip-eol-1": new Promise((resolve) => notifyDependents["down-skip-eol-1"] = resolve),
          "down-skip-eol-2": new Promise((resolve) => notifyDependents["down-skip-eol-2"] = resolve),
          "blank-up-1": new Promise((resolve) => notifyDependents["blank-up-1"] = resolve),
          "blank-up-2": new Promise((resolve) => notifyDependents["blank-up-2"] = resolve),
          "left-3": new Promise((resolve) => notifyDependents["left-3"] = resolve),
          "right-3": new Promise((resolve) => notifyDependents["right-3"] = resolve),
          "up-3": new Promise((resolve) => notifyDependents["up-3"] = resolve),
          "down-3": new Promise((resolve) => notifyDependents["down-3"] = resolve),
          "down-3-up": new Promise((resolve) => notifyDependents["down-3-up"] = resolve),
          "down-3-up-extend-a": new Promise((resolve) => notifyDependents["down-3-up-extend-a"] = resolve),
          "down-3-up-extend-b": new Promise((resolve) => notifyDependents["down-3-up-extend-b"] = resolve),
        };

  test("transition initial            > left              ", async function () {
    const beforeDocument = await documents["initial"];

    if (beforeDocument === undefined) {
      notifyDependents["left"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
      bar
        ^ 0
      baz
      quxxx
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.left.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["left"](afterDocument);
    } catch (e) {
      notifyDependents["left"](undefined);

      throw e;
    }
  });

  test("transition initial            > right             ", async function () {
    const beforeDocument = await documents["initial"];

    if (beforeDocument === undefined) {
      notifyDependents["right"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
      bar
      baz
      ^ 0
      quxxx
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.right.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["right"](afterDocument);
    } catch (e) {
      notifyDependents["right"](undefined);

      throw e;
    }
  });

  test("transition initial            > up                ", async function () {
    const beforeDocument = await documents["initial"];

    if (beforeDocument === undefined) {
      notifyDependents["up"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
         ^ 0
      bar
      baz
      quxxx
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.up.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["up"](afterDocument);
    } catch (e) {
      notifyDependents["up"](undefined);

      throw e;
    }
  });

  test("transition initial            > up-skip-eol       ", async function () {
    const beforeDocument = await documents["initial"];

    if (beforeDocument === undefined) {
      notifyDependents["up-skip-eol"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
        ^ 0
      bar
      baz
      quxxx
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.up.jump", { avoidEol: true });
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["up-skip-eol"](afterDocument);
    } catch (e) {
      notifyDependents["up-skip-eol"](undefined);

      throw e;
    }
  });

  test("transition initial            > down              ", async function () {
    const beforeDocument = await documents["initial"];

    if (beforeDocument === undefined) {
      notifyDependents["down"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
      bar
      baz
         ^ 0
      quxxx
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.down.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["down"](afterDocument);
    } catch (e) {
      notifyDependents["down"](undefined);

      throw e;
    }
  });

  test("transition initial            > down-skip-eol-1   ", async function () {
    const beforeDocument = await documents["initial"];

    if (beforeDocument === undefined) {
      notifyDependents["down-skip-eol-1"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
      bar
      baz
        ^ 0
      quxxx
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.down.jump", { avoidEol: true });
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["down-skip-eol-1"](afterDocument);
    } catch (e) {
      notifyDependents["down-skip-eol-1"](undefined);

      throw e;
    }
  });

  test("transition initial            > down-skip-eol-2   ", async function () {
    const beforeDocument = await documents["initial"];

    if (beforeDocument === undefined) {
      notifyDependents["down-skip-eol-2"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
      bar
      baz
      quxxx
         ^ 0
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.down.jump", { count: 2, avoidEol: true });
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["down-skip-eol-2"](afterDocument);
    } catch (e) {
      notifyDependents["down-skip-eol-2"](undefined);

      throw e;
    }
  });

  test("transition blank-initial      > blank-up-1        ", async function () {
    const beforeDocument = await documents["blank-initial"];

    if (beforeDocument === undefined) {
      notifyDependents["blank-up-1"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo

      ^ 0
      bar

    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.up.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["blank-up-1"](afterDocument);
    } catch (e) {
      notifyDependents["blank-up-1"](undefined);

      throw e;
    }
  });

  test("transition blank-initial      > blank-up-2        ", async function () {
    const beforeDocument = await documents["blank-initial"];

    if (beforeDocument === undefined) {
      notifyDependents["blank-up-2"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
        ^ 0

      bar

    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.up.jump", { count: 2, avoidEol: true });
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["blank-up-2"](afterDocument);
    } catch (e) {
      notifyDependents["blank-up-2"](undefined);

      throw e;
    }
  });

  test("transition initial-3          > left-3            ", async function () {
    const beforeDocument = await documents["initial-3"];

    if (beforeDocument === undefined) {
      notifyDependents["left-3"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
         ^ 0

      bar
      baz
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.left.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["left-3"](afterDocument);
    } catch (e) {
      notifyDependents["left-3"](undefined);

      throw e;
    }
  });

  test("transition initial-3          > right-3           ", async function () {
    const beforeDocument = await documents["initial-3"];

    if (beforeDocument === undefined) {
      notifyDependents["right-3"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo

      bar
      ^ 0
      baz
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.right.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["right-3"](afterDocument);
    } catch (e) {
      notifyDependents["right-3"](undefined);

      throw e;
    }
  });

  test("transition initial-3          > up-3              ", async function () {
    const beforeDocument = await documents["initial-3"];

    if (beforeDocument === undefined) {
      notifyDependents["up-3"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
      ^ 0

      bar
      baz
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.up.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["up-3"](afterDocument);
    } catch (e) {
      notifyDependents["up-3"](undefined);

      throw e;
    }
  });

  test("transition initial-3          > down-3            ", async function () {
    const beforeDocument = await documents["initial-3"];

    if (beforeDocument === undefined) {
      notifyDependents["down-3"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo

      bar
      ^ 0
      baz
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.down.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["down-3"](afterDocument);
    } catch (e) {
      notifyDependents["down-3"](undefined);

      throw e;
    }
  });

  test("transition down-3             > down-3-up         ", async function () {
    const beforeDocument = await documents["down-3"];

    if (beforeDocument === undefined) {
      notifyDependents["down-3-up"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo

      ^ 0
      bar
      baz
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.up.jump");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["down-3-up"](afterDocument);
    } catch (e) {
      notifyDependents["down-3-up"](undefined);

      throw e;
    }
  });

  test("transition down-3             > down-3-up-extend-a", async function () {
    const beforeDocument = await documents["down-3"];

    if (beforeDocument === undefined) {
      notifyDependents["down-3-up-extend-a"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo

      | 0
      bar
      ^ 0
      baz
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.up.extend");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["down-3-up-extend-a"](afterDocument);
    } catch (e) {
      notifyDependents["down-3-up-extend-a"](undefined);

      throw e;
    }
  });

  test("transition down-3-up-extend-a > down-3-up-extend-b", async function () {
    const beforeDocument = await documents["down-3-up-extend-a"];

    if (beforeDocument === undefined) {
      notifyDependents["down-3-up-extend-b"](undefined);
      this.skip();
    }

    const afterDocument = ExpectedDocument.parseIndented(6, `\
      foo
      | 0

      ^ 0
      bar
      ^ 0
      baz
    `);

    try {
      // Set-up document to be in expected initial state.
      await beforeDocument.apply(editor);

      // Perform all operations.
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "character" });
      await executeCommand("dance.select.up.extend");
      await executeCommand("dance.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

      // Ensure document is as expected.
      afterDocument.assertEquals(editor);

      // Test passed, allow dependent tests to run.
      notifyDependents["down-3-up-extend-b"](afterDocument);
    } catch (e) {
      notifyDependents["down-3-up-extend-b"](undefined);

      throw e;
    }
  });
});
