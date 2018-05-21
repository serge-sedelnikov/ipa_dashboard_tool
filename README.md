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
- `Dashboard` - a single dashboard that is defined to be displayed on one page. Developer can create multiple dashboards for application, set names for them, then the application displays them in different tabs where user can switch between.

Widgets can be of a different type:

- Number
- Text
- Line chart
- Bar Chart
- Pie Chart
- *Generic HTML Widget* - the widget that accepts data ID and calls `render()` method, developer needs to define render method.
- etc.. (to be extended based on customer needs)

![main blocks](https://bitbucket.org/storaensoipa/ipa.dashboard.tool/downloads/IpaDashboarding.png)

Jobs and Socket.IO server are running on Express Node.JS application. The same application is hosting React-based UI layer which is subscribed for Socket.IO Events

# Used technology stack

- Node JS as main running environment
- Express for hosting React UI layer and management API
- React JS for developing the UI layer
    - Bootstrap 4.0 for layout and main css style;
    - React grid layout (https://github.com/STRML/react-grid-layout) for building up layout of dashboard;
    - AG Data Grid for data table display;
    - Fontawesome 5.0 for icons;
    - React i18Next for internationalization;
    - React charts (http://recharts.org/) for chart widgets;
    - Node Schedule to run jobs on schedule (https://github.com/node-schedule/node-schedule)
    - MQTT for Node JS to subscribe for MQTT broker messages (https://www.npmjs.com/package/mqtt);

# Connection Points and Hierarchy

There are two types of jobs:

- `ScheduleJob` - runs on schedule. When creating job, derived from `ScheduleJob` class, override method `getSchedule()` and return desired Cron format string: (`* * * * * *`) describing the needed schedule. Once per second is the minimal.
- `MqttEventJob` - runs on MQTT event. When creating job derived from the `MqttEventJob`, override the method `getTopics()` that rerurns the array of topics that the job need to subscribe to. Acceptrs all MQTT wildcard formats too: `['topic1/#', 'topic2/event1', ...]`

> If mentioned methods are not overwritten, the exception is thrown on the application start.

![User interface hierarchy](https://bitbucket.org/storaensoipa/ipa.dashboard.tool/downloads/IpaDashboarding1.png)