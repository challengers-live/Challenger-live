// Source entry for the Capacitor native plugin bundle.
// GitHub Actions bundles this file into native-plugins.bundle.js for the APK.
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';
import { Filesystem } from '@capacitor/filesystem';
window.Capacitor = Capacitor;
window.ChallengerNativePlugins = { App, Browser, Share, Filesystem };
