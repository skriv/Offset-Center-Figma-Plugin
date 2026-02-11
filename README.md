# Offset Center

Precise inset & outset resizing from center in Figma.

CenterOffset allows you to shrink or grow selected layers by an exact pixel value — while keeping the object perfectly centered.

Unlike scaling, this plugin increases or decreases the size by a fixed amount on **all sides**.

---

## ✨ Features

- Inset (shrink) or Outset (grow)
- Decimal precision (supports 0.01, 0.05, etc.)
- Resizes from center
- Works with multiple selected layers
- Clean Figma-like UI
- No build step required

---

## 📐 How It Works

Offset is applied equally to all sides:

New Width  = Width  ± (2 × offset)  
New Height = Height ± (2 × offset)

To preserve the center position:

x = x − offset  
y = y − offset  

- **Outset** → object grows  
- **Inset** → object shrinks  

---

## 🎯 Use Cases

- Creating inner padding shapes  
- Generating outer outlines  
- Icon grid adjustments  
- Border compensation  
- Design system spacing  
- Precise geometric edits  

---

## 🚀 Installation (Development Mode)

1. Download or clone this repository.  
2. Open Figma.  
3. Go to:  
   Plugins → Development → Import plugin from manifest…  
4. Select the `manifest.json` file.  
5. Run via:  
   Plugins → Development → OffsetCenter  

---

## 🛠 Usage

1. Select one or multiple layers.  
2. Enter an offset value.  
3. Choose:
   - **Inset** (shrink)
   - **Outset** (grow)
4. Press ✓ or hit **Enter**.   

---

## ⚠ Notes

- Minimum resulting size is clamped to prevent negative dimensions.  
- Some auto-layout children may be constrained by layout rules.  
- Rotation is preserved, but resizing is based on bounding box dimensions.  

---

## 📦 File Structure

/manifest.json  
/code.js  
/ui.html  

No bundler or build tools required.

---

## 🧩 Why CenterOffset?

Figma does not provide a native "geometric offset resize" tool for objects.

CenterOffset gives you predictable, pixel-accurate control over inset and outset resizing — ideal for system-driven UI work and precise geometry adjustments.

---

## License

MIT
