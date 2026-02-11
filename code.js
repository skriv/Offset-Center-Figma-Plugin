// Offset Resize (Figma-like) — no build step
// "Offset" here means inset/outset by N px (shrink/grow) while keeping center position.

figma.showUI(__html__, { width: 520, height: 92 });

function isNumber(n) {
  return typeof n === "number" && Number.isFinite(n);
}

function canResize(node) {
  return (
    node &&
    typeof node === "object" &&
    "width" in node &&
    "height" in node &&
    (("resizeWithoutConstraints" in node) || ("resize" in node))
  );
}

function resizeNodeFromCenter(node, delta) {
  // delta: positive => grow, negative => shrink
  const w = node.width;
  const h = node.height;

  const newW = Math.max(0.01, w + 2 * delta);
  const newH = Math.max(0.01, h + 2 * delta);

  // Keep center by shifting top-left
  node.x = node.x - delta;
  node.y = node.y - delta;

  if ("resizeWithoutConstraints" in node) {
    node.resizeWithoutConstraints(newW, newH);
  } else {
    node.resize(newW, newH);
  }
}

function applyOffset(amount, mode) {
  const selection = figma.currentPage.selection || [];
  if (selection.length === 0) {
    figma.notify("Nothing selected. Select one or more layers.");
    return;
  }

  const a = Number(amount);
  if (!isNumber(a) || a < 0) {
    figma.notify("Offset must be a non-negative number.");
    return;
  }

  const delta = mode === "inset" ? -a : a;

  let resized = 0;
  let skipped = 0;

  for (const node of selection) {
    try {
      if (!canResize(node)) {
        skipped++;
        continue;
      }
      resizeNodeFromCenter(node, delta);
      resized++;
    } catch (e) {
      skipped++;
    }
  }

  figma.notify(`Offset applied: resized ${resized}, skipped ${skipped}`);
}

figma.ui.onmessage = (msg) => {
  if (!msg || typeof msg !== "object") return;

  if (msg.type === "apply") {
    applyOffset(msg.amount, msg.mode);
    return;
  }

  if (msg.type === "close") {
    figma.closePlugin();
    return;
  }
};
