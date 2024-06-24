## Installation

### 1. Download the BAML CLI

Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/BoundaryML/homebrew-baml/main/install-baml.sh | bash
```
Mac:

```bash
brew install boundaryml/baml/baml
```

Windows (with [Scoop](https://scoop.sh/)):

```
scoop bucket add baml-bucket https://github.com/boundaryml/homebrew-baml
scoop install baml
```


### 2. Download VSCode extension

Search for "BAML" or [Click here](https://marketplace.visualstudio.com/items?itemName=gloo.BAML)

> If you are using python, enable typechecking in VSCode’s settings.json:
>
> "python.analysis.typecheckingMode": "basic"

### 3. Add BAML to any existing project

```bash
cd my_project
baml init
```
