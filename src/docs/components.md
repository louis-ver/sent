## Presentational Components

- `User` is a single user.
 - `name: string` is the name of the user to show
 - `selected: boolean` is whether the background color should be black or not, and text should be white or not.
 - `onClick()` is a callback to invoke when a user is clicked.
- `App` is the root component that renders everything else.


## Container Components

- `UserList` is a list showing online users.
 - `users: Array` is an array of online users with { id, ip, name, selected } shape.
 - `onUserClick(id: number)` is a callback to invoke when a user is selected.
- `UserRequests` is a list showing incoming requests for a particular user
 - `userName: string` is the name of the person to send you a request
 - `name: string` is the name of the file to show
 - `requestStatus: request` is the status of the incoming request
 - `onStatusChange(id: number, status)` is a callback to invoke when a status is changed by the user
- `Dropbox` is a box to drop files for transfer
 - `file: file` is a file with { name, length, type, hash } shape.
 - `containsFile: boolean` is whether a file was dropped in or not.
 - `onFileDrop(file)` is a callback to invoke when a file is dropped.
- `Footer` is where we let the user send a file to the selected users
