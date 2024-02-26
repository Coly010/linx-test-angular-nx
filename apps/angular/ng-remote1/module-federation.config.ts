import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ng-remote1',
  exposes: {
    './Routes': 'apps/angular/ng-remote1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
