# <img width="32px" src="./img/icon-128.webp" alt="project icon" /> Do Not Disturb While Screen Sharing Or Recording Gnome Extension

<a
href="https://extensions.gnome.org/extension/5985/do-not-disturb-while-screen-sharing-or-recording/">
<img
src="https://raw.githubusercontent.com/marcinjahn/gnome-quicksettings-audio-devices-hider-extension/8e9404e349a0cf6c235cf69394a6292c6eef4cae/img/get-it-on-ego.svg"
height="100" alt="Get it on GNOME Extensions"/> </a>

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

## Contributing

In case of problems, it's a good idea to open an
[Issue](https://github.com/marcinjahn/gnome-do-not-disturb-while-screen-sharing-or-recording-extension/issues).
If you know how to fix it, open a [Pull
Request](https://github.com/marcinjahn/gnome-do-not-disturb-while-screen-sharing-or-recording-extension/pulls)!

### Local Development

To run the extension locally "from sources":

```
git clone git@github.com:marcinjahn/gnome-do-not-disturb-while-screen-sharing-or-recording-extension.git
cd gnome-do-not-disturb-while-screen-sharing-or-recording-extension
npm i
npm run build
npm run linkdist
```

The last command will creae a soft link at
`~/.local/share/gnome-shell/extensions/do-not-disturb-while-screen-sharing-or-recording@marcinjahn.com`,
which allows you to enable the extension on your system (e.g., via [Extensions
Manager](https://flathub.org/apps/com.mattjakeman.ExtensionManager)).

Anytime you change anything, rebuild the extension with `npm run build`, and
restart the session:

- on Wayland, log out and log in (I know, it's painful),
- on X11, open "Run a Command" dialog (Alt + F2), type "r" and press Enter