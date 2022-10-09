# @segment/analytics-react-native-plugin-sprig

`DestinationPlugin` for [Sprig](https://docs.sprig.com). Wraps [`react-native-userleap`](https://www.npmjs.com/package/react-native-userleap).

## Installation

You need to install the `@sprig-technologies/analytics-react-native-plugin-sprig` and the `react-native-userleap` dependency.

Using NPM:
```bash
npm install --save @sprig-technologies/analytics-react-native-plugin-sprig react-native-userleap
```

Using Yarn:
```bash
yarn add @sprig-technologies/analytics-react-native-plugin-sprig react-native-userleap
```

Run `pod install` after the installation to autolink the Sprig SDK.

## Usage

Follow the [instructions for adding plugins](https://github.com/segmentio/analytics-react-native#adding-plugins) on the main Analytics client:

In your code where you initialize the analytics client call the `.add(plugin)` method with an `SprigPlugin` instance. 

```ts
// app.js

import { createClient } from '@segment/analytics-react-native';

import { SprigPlugin } from '@sprig-technologies/analytics-react-native-plugin-sprig';

const segmentClient = createClient({
  writeKey: 'SEGMENT_WRITE_KEY'
});

const plugin = new SprigPlugin();

segmentClient.add({ plugin });
```

## Support

Please use Github issues, Pull Requests, or feel free to reach out to our [support team](https://segment.com/help/).

## Integrating with Segment

Interested in integrating your service with us? Check out our [Partners page](https://segment.com/partners/) for more details.

## License
Please see LICENSE file