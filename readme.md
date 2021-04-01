# thirtyfive-public

> Monorepo of all thirtyfive's open source projects.

# Multi-monorepo compatibility

This repo can be added to a multi-monorepo whereby `pnpm-lock.yaml` and `pnpm-workspace.yaml` won't be used.

Until [this](https://github.com/pnpm/pnpm/issues/1291#issuecomment-637685956) is resolved we need to use a custom install script and modules dir.

```
scripts/pnpm-install.sh
```

NOTE: If we try to install something in public dir and there is a custom modules dir in `npmrc` then it will use that custom dir. We don't want this. Only pass the custom dir in as a cli flag.

```
modules-dir = node_modules_public
```

WARNING!

Using a custom modules-dir will make it search for modules in those dirs. You must ignore them.

---

# ESLint

Enable manual eslint configuration in WebStorm.

Dependencies in shareable configs: https://github.com/eslint/eslint/issues/3458

# Note

For open-sourcing parts of our codebase. Never put anything in here that is not meant to be public.

