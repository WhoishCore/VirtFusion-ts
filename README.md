# VirtFusion
[![](https://img.shields.io/npm/v/virtfusion-ts.svg?color=blue)](https://www.npmjs.com/package/virtfusion-ts) [![](https://img.shields.io/npm/last-update/virtfusion-ts.svg)](https://github.com/WhoishCore/VirtFusion-ts/commits/main) [![](https://img.shields.io/npm/dm/virtfusion-ts?color=E4BD68)](https://www.npmjs.com/package/virtfusion-ts) [![](https://img.shields.io/npm/l/virtfusion-ts.svg?color=e3e3e3)](https://www.gnu.org/licenses/gpl-3.0.html)

A TypeScript client for interacting with the VirtFusion API. Maintained by [Whoish](https://www.npmjs.com/~whoish).

## Installation
Install the package using `pnpm`:
```bash
pnpm add virtfusion-ts
```

## Usage

### Initialization
Before making API calls, initialize the client with the required configuration:
```ts
import { VirtFusionV1 } from "virtfusion-ts";

const VIRTFUSION_API_HOST = "vf.example.com"; // Hostname of the VirtFusion API server
const VIRTFUSION_API_KEY = "****" // Your API key

VirtFusionV1.init({
  host: VIRTFUSION_API_HOST,
  token: VIRTFUSION_API_KEY,
  useHttps: true,
});

const virtfusion = new VirtFusionV1();
```

> [!WARNING]
> Do not expose administrator API tokens in browser-side Vue or React code. Use this client from a backend or server-side API route, then call that backend from your frontend.

> [!TIP]
> For detailed usage instructions, please refer to the [Wiki Page](https://github.com/WhoishCore/VirtFusion-ts/wiki).

## Roadmap
> [!NOTE]
> The project is under active development, with features being implemented incrementally. For detailed features support list, please refer to the [Roadmap Page](https://github.com/WhoishCore/VirtFusion-ts/wiki/Roadmap).
