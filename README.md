# exosphere - an infrastructure health and status visibility tool

This tool is in the VERY early stages of creation. So don't use it yet. :)

Check back soon...

## Goals

* Show mind map of infrastructure
* Mind map is loaded from xml or similar file that can be editable on draw.io or eventually directly in the app
* Display health via color of node or cluster
* Ability to tail important logs directly from the interface
* Display service status for each node
* Link to graphs & statistics
* Log directly to elasticsearch or other popular data stores

## Why?

There are many awesome tools out there for building and manage an open source infrastructure. One piece that is missing however is something that lets you see the health and status of your entire cluster at once visually. That is the problem that I am trying to solve. It should be a modular solution that allows you to write plugins for your particular use case and share them with our community or use plugins that others have contributed.

## Design

* Visualization - D3 http://d3js.org/
* Events -
* SSH - Shync

### License

fleet is released under the Apache 2.0 license. See the [LICENSE](LICENSE) file for details.

Specific components of fleet use code derivative from software distributed under other licenses; in those cases the appropriate licenses are stipulated alongside the code.
