# ipa.dashboard.tool

The tool to create dashboards for customers.
Uses React on UI layer, NodeJS Express on the backend layer.

# Intro

The tool is created to speed up the UI development for each customer. To create a customer specific dashboard, clone this repository, setup jobs, setup widgets, test and deploy to customer specific URL.

The deployment can be done either locally on the customer premise or in the cloud.

See below the explanation of main architecture, flows, jobs and widgets.

# Architecture and terms

The frameworks is based on the following concepts:

- `Jobs` - the main working object, executed on schedule or on MQTT event, fetches the data from the mackend, maps and reduses the data based on target widget data template, sends the fetched data to widget over socket.io client
- `Widget` - the representation of the data on the UI. Each widget is subscribed to certain `data_id` - a string with the identifier where each `Job` pushes the data to. Once `Job` pushed the data with `sendEvent(dataId, payload)` method, the widget receives the messages with same `dataId` and refreshes the own representation.

Widgets can be of a different type:

- Number
- Text
- Line chart
- Bar Chart
- Pie Chart
- etc.. (to be extended based on customer needs)

![main blocks](https://bitbucket.org/storaensoipa/ipa.dashboard.tool/downloads/IpaDashboarding.png)

