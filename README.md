# Do Not Disturb While Screen Sharing Or Recording Gnome Extension

Automatically switches on the "Do Not Disturb" mode while screen sharing or
screen recording. As soon as screen sharing/recording is over, "Do Not Disturb"
mode will be switched back off.

Do Not Disturb mode stops notifications from appearing on your screen to let you
focus on your work. Notifications may contain sensitive content that you might
not want to show to everyone while you're screen-sharing.

Note that screen sharing will toogle "Do Not Disturb" only on Wayland sessions.
X11 is not supported! However, screen recording toggle will work on both Wayland
and X11.

It is likely that not all screen recording apps will trigger the extension to do
its job. The extension was tested with the Gnome built-in screen recorder.

![Example of how extension works](./img/example.png)

## Configuration

You are able to configure the following options:

![Extension preferences](./img/preferences.png)