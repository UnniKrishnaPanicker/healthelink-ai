# Binaries used by UDI-SII

The easiest way to download binaries from GitHub Releases is to use
[eget](https://github.com/zyedidia/eget). SQLite is not available on GitHub
Releases so we grab that manually.

```bash
# get SQLite from OS package and copy it here, e.g.
cp ~/.asdf/installs/sqlite/3.43.1/bin/sqlite3 bin
eget --to bin duckdb/duckdb
eget --to bin k1LoW/tbls

# test the binaries
bin/sqlite3 --version
bin/duckdb --version
bin/tbls version
```
