import * as fs from "fs";
import yaml from "js-yaml";
import * as path from "path";

const examplesDir = "./examples";
const yamlPath = "./docs/examples.yaml";
const author = process.env.GITHUB_ACTOR;

function readYAMLFile(filePath) {
  try {
    return yaml.load(fs.readFileSync(filePath, "utf8")) || { categories: [] };
  } catch (error) {
    console.error("Error loading YAML file:", error);
    return { categories: [] };
  }
}

function writeYAMLFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, yaml.dump(data), "utf8");
    console.log("YAML file updated successfully.");
  } catch (error) {
    console.error("Error writing YAML file:", error);
  }
}

function updateCategoryFolders(category, folderPath) {
  fs.readdirSync(folderPath, { withFileTypes: true }).forEach(
    (folderDirent) => {
      if (folderDirent.isDirectory()) {
        const folderName = folderDirent.name;
        if (!category.folders.some((folder) => folder.name === folderName)) {
          category.folders.push({ name: folderName, author: author });
        }
      }
    }
  );
}

function updateYAML() {
  const categories = readYAMLFile(yamlPath);

  fs.readdirSync(examplesDir, { withFileTypes: true }).forEach(
    (categoryDirent) => {
      if (categoryDirent.isDirectory()) {
        const categoryName = categoryDirent.name;
        let category = categories.categories.find(
          (cat) => cat.name === categoryName
        );

        if (!category) {
          category = { name: categoryName, folders: [] };
          categories.categories.push(category);
        }

        const folderPath = path.join(examplesDir, categoryName);
        updateCategoryFolders(category, folderPath);
      }
    }
  );

  writeYAMLFile(yamlPath, categories);
}

updateYAML();
