# BZO and Foreign structured content

This directory contains either non-sensitive (no secrets) or sensitive (with
secrets) structured content such as `*.csv`, `.parquet`, `.xml` and `*.json`.

- Sensitive content with secrets should be prefixed with `sensitive-` in the
  filename. That's because `sensitive-*` files are listed in `.gitignore`.
- Non-sensitive content without secrets (_public_ data) may be Git tracked.

## Catalog

⚠️ Reminder: in Linux the case of filenames matter so only use lowercase
filenames with hyphens as separators (not spaces). For example do not use
`my data.CSV` use `my-data.csv`.

- `secure-controls-framework-v2023.2.xlsx` is downloaded from from Secure
  Controls Framework (SCF).
- `aicpa_soc2_controls.xlsx` was provided by Control Logic for SOC2 Type 1
  Certification.
- `test-report.tap` is a TAP format test result shared for dashboard creation.
