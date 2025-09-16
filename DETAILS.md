# Playwright Automation – DemoQA

This project contains automated tests for the [DemoQA](https://demoqa.com/) application using **Playwright**.  
The goal is to practice and demonstrate end-to-end UI automation across multiple sections of the DemoQA site.

---

## 📌 Covered Sections

### 1. **Elements**
- ✅ Text Box – fill and submit forms  
- ✅ Check Box – expand/collapse, select, verify  
- ✅ Radio Button – select and validate results  
- ✅ Web Tables – add, edit, search, delete rows  
- ✅ Buttons – click, double-click, right-click  
- ✅ Links – navigation & API response validation  
- ✅ Broken Links / Images – detect invalid URLs  

### 2. **Forms**
- ✅ Practice Form – complete and submit student registration  
- ✅ Upload & Download – upload files, validate successful downloads  

### 3. **Alerts, Frames & Windows**
- ✅ Browser Windows – tabs, windows, messages  
- ✅ Alerts – immediate, timed, confirm & prompt alerts  
- ✅ Frames – single & nested frames  
- ✅ Modal Dialogs – small & large modals  

### 4. **Widgets**
- ✅ Accordions  
- ✅ Auto-Complete  
- ✅ Date Picker  
- ✅ Slider  
- ✅ Progress Bar  
- ✅ Tabs  
- ✅ Tooltips  
- ✅ Menu  
- ✅ Select Menu (with searchable dropdowns)  

### 5. **Interactions**
- ✅ Draggable elements  
- ✅ Droppable targets  
- ✅ Resizable boxes  
- ✅ Selectable lists/grids  
- ✅ Sortable lists/grids  

### 6. **Book Store Application**
- ✅ Login & Register user  
- ✅ Search and filter books  
- ✅ Add and remove books from profile  
- ✅ Logout  

---

## 🛠 Tools & Setup
- **Playwright** (Test runner & browser automation)  
- **Node.js** (runtime)  
- **VS Code** with GitHub integration  
- Test scripts written in **JavaScript/TypeScript**  

---

## 🚦 Test Practices
- Use of **locators**: `getByRole`, `getByLabel`, `getByText`, and CSS.  
- Proper **assertions** with `expect`.  
- Handling **alerts, frames, iframes, modals**.  
- File upload/download validation.  
- Managing multiple windows and tabs.  
- Organized test suites by **feature/page**.  

---

## 
---

## 📌 How to Run
```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run a specific file
npx playwright test tests/elements/textbox.test.js

# Run with UI mode
npx playwright test --ui


🎯 Goals Achieved

Built confidence in Playwright automation.

Learned handling of complex UI interactions.

Practiced structuring test suites like real-world QA projects.