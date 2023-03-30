This is a road trip planner (well it could really be for any trip but were gonna start with road)

Flow of user events:
1. User enters main stops on trip
    1a. Classify types of locations (attractions, lodging, food, )
2. User enters preferred starting location
3. User enters preferred ending location
4. User enters how long they want their trip to take (or specifies no time constraints)
5. Budget?
6. Ask user more questions about their trip
    6a. Drive more during the day? or at night?
    6b. What kind of activities would you want to do on your trip?
    6c. Any dietary restrictions
    6d. Camping or hotels?

Flow of backend events
1. Find shortest path (Dijkstra's)
2. Locate notable stops in between locations
3. Locate hotels and sleeping areas 
dummy