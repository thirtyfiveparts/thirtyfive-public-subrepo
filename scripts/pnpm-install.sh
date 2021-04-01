#!/bin/bash

mv pnpm-workspace.public.yaml pnpm-workspace.yaml
# WARNING: You must ignore the modules-dir in the root 'pnpm-workspace.yaml'.
pnpm install --modules-dir node_modules_public
mv pnpm-workspace.yaml pnpm-workspace.public.yaml
