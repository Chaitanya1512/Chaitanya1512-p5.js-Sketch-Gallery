document.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("./examples.yaml")
    .then((response) => response.text())
    .then(processYAML)
    .catch((error) => console.error("Error loading the examples:", error));
}

function processYAML(yamlText) {
  const data = jsyaml.load(yamlText);
  const categories = data.categories;
  populateSidebar(categories);
}

function populateSidebar(categories) {
  const sidebar = document.getElementById("examples-list");

  categories.forEach((category) => {
    const categoryName = createCategoryElement(category);

    if (category.folders && category.folders.length > 0) {
      const categoryList = createCategoryList(category, categories);
      categoryName.appendChild(categoryList);
      categoryList.style.display = "none";
    } else {
      categoryName.classList.add("no-child");
    }

    sidebar.appendChild(categoryName);
  });
}

function createCategoryElement(category) {
  const categoryName = document.createElement("li");
  categoryName.className = "select parent sidebar-item";
  categoryName.textContent = category.name;

  if (category.folders && category.folders.length > 0) {
    categoryName.classList.add("caret");
    categoryName.onclick = () => toggleCategory(categoryName);
  }

  return categoryName;
}

function createCategoryList(category, categories) {
  const categoryList = document.createElement("ul");
  categoryList.className = "nested";

  category.folders.forEach((folder) => {
    const folderName = document.createElement("li");
    folderName.className = "select sketch sidebar-item";
    folderName.textContent = folder.name;
    folderName.onclick = (event) => {
      event.stopPropagation();
      handleSelection(folderName);
      loadFolder(category.name, folder.name, categories);
    };
    categoryList.appendChild(folderName);
  });

  return categoryList;
}

function handleSelection(element) {
  document
    .querySelectorAll(".select")
    .forEach((i) => i.classList.remove("selected"));
  element.classList.add("selected");
}

function toggleCategory(categoryDiv) {
  categoryDiv.classList.toggle("caret-down");
  const categoryList = categoryDiv.querySelector("ul");
  categoryList.style.display =
    categoryList.style.display === "block" ? "none" : "block";
}

function loadFolder(categoryName, folderName, categories) {
  const HTMLFileName = folderName.replace(/\s/g, "_");
  const folderPage = `../examples/${categoryName}/${folderName}/${HTMLFileName}.html`;
  document.getElementById("demo").src = folderPage;

  loadCodeDisplay(categoryName, folderName);

  const folder = findFolder(categoryName, folderName, categories);
  updateHeader(folder);
}

function loadCodeDisplay(categoryName, folderName) {
  const JSFileName = folderName.replace(/\s/g, "_");
  const codePath = `../examples/${categoryName}/${folderName}/${JSFileName}.js`;

  fetch(codePath)
    .then((response) => response.text())
    .then(updateCodeDisplay);
}

function updateCodeDisplay(code) {
  const codeDisplay = document.getElementById("code");
  codeDisplay.dataset.highlighted = "";
  codeDisplay.textContent = code;
  document.getElementById("pre").appendChild(codeDisplay);
  hljs.highlightElement(codeDisplay);
}

function findFolder(categoryName, folderName, categories) {
  return categories
    .find((c) => c.name === categoryName)
    .folders.find((f) => f.name === folderName);
}

function updateHeader(folder) {
  const codeDisplay = document.getElementById("code-display");
  let headerDiv = codeDisplay.querySelector("#header");

  if (!headerDiv) {
    headerDiv = document.createElement("div");
    headerDiv.id = "header";
    codeDisplay.insertBefore(headerDiv, codeDisplay.firstChild);
  } else {
    headerDiv.innerHTML = "";
  }

  headerDiv.innerHTML = `<h1 class="file-name">${folder.name}</h1><h4 class="author-name">${folder.author}</h4>`;
}
