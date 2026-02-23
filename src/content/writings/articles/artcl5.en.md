One of the biggest challenges for developers in certain regions is network instability, sanctions from foreign service providers, and sudden internet outages. When dealing with internet disruptions in programming, we face two entirely different scenarios:

**International Internet Disruption (or Sanctions):** Access to foreign servers is blocked, but the local/national network is still functional. The primary solution here is using **Mirrors** and **Alternative Registries**.

**Complete Internet Blackout:** Your system is not connected to any network. The primary solution here is relying on your system's **Cache** and **Offline Modes**.

In this article, we will explore practical solutions to navigate these two crises across four popular platforms and technologies.

---

## 1. Flutter

Flutter heavily relies on Google's servers to fetch packages and the SDK.

### A) During International Internet Outages (Using Mirrors)

To bypass sanctions or access packages during a national-only network state, you need to change Flutter's default server addresses to mirror servers. This is done by setting **Environment Variables**:

- **PUB_HOSTED_URL Variable:** The URL for downloading packages (replacing pub.dev).
- **FLUTTER_STORAGE_BASE_URL Variable:** The URL for downloading the core Flutter SDK files.

You can set these variables to reliable Chinese mirrors (like Tsinghua University) or local mirror servers available in your region.

### B) During a Complete Internet Blackout (Offline Mode)

If you have previously downloaded the packages, Flutter stores them in the `.pub-cache` directory. To tell Flutter to use these cached files without checking the internet, run the following command:

```bash
flutter pub get --offline
```

---

## 2. Web Development & React (Node.js)

In the JavaScript ecosystem, tools like npm, Yarn, or pnpm handle package management.

### A) During International Internet Outages (Changing the Registry)

The default address for downloading packages is `registry.npmjs.org`. You can change this to an alternative registry (mirror).

**Changing the registry in npm:**

```bash
npm config set registry https://registry.npmmirror.com
```

To revert to the default:

```bash
npm config delete registry
```

### B) During a Complete Internet Blackout (Offline Cache)

Depending on your package manager, you can force the system to read only from the local cache:

- **For npm:** `npm install --prefer-offline --no-audit`
- **For Yarn (Highly Reliable):** `yarn install --offline`
- **For pnpm:** `pnpm install --offline`

---

## 3. Native Android (Android Studio / Kotlin / Gradle)

The Android build system (Gradle) is highly sensitive to internet connectivity, and strict sanctions can make things even more difficult.

### A) During International Internet Outages

You must change the repository URLs from which Gradle downloads libraries:

- **Mirroring Repositories:** In your `settings.gradle` or `build.gradle` file, replace standard addresses like `google()` and `mavenCentral()` with mirror URLs (such as Aliyun).
- **Gradle Wrapper Settings:** In the `gradle-wrapper.properties` file, change the `distributionUrl` to a valid mirror to download the Gradle `.zip` file.

> **Note:** In restricted regions, using Anti-Sanction DNS services is often a more hassle-free alternative to manually changing Android repositories.

### B) During a Complete Internet Blackout (Offline Mode)

Android Studio has a built-in feature to work directly from the cache (located in `.gradle/caches/`):

- **Via the UI:** Open the Gradle panel on the right side of Android Studio and click the **Toggle Offline Mode** icon (it looks like a crossed-out Wi-Fi symbol).
- **Via the Terminal:** Add the `--offline` flag to your build command:

```bash
./gradlew build --offline
```

---

## 4. iOS (Xcode / Swift)

Apple has fewer sanction-related restrictions, but GitHub filtering or international outages can still disrupt your build process.

### A) During International Internet Outages

**For CocoaPods:** Change the source URL in your `Podfile` to a mirror:

```ruby
source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
```

**For SPM (Swift Package Manager):** If the international internet is down, you may need to manually download the repository as a ZIP file and introduce it to Xcode as a **Local Package**.

### B) During a Complete Internet Blackout

- **The Pods Folder:** As long as you don't run `pod install` and both the `Pods` folder and `Podfile.lock` remain intact in your project, Xcode will build the project completely offline.
- **SPM Cache:** Xcode caches SPM packages in the `DerivedData` directory. If the internet goes down, absolutely avoid cleaning the build folder (**Clean Build Folder**) so the offline build can succeed.

---

## The Golden Solution for Teams and Companies (Local Registry)

If you work in a company or a team, manually configuring every single machine is neither logical nor sustainable. The best solution is to set up an **On-Premise Local Registry** within your internal network.

You can install one of the following tools on your company's internal server:

- **Verdaccio:** Perfect for Web and Node.js projects.
- **Nexus Repository Manager** or **JFrog Artifactory:** A comprehensive solution that acts as a central hub for all technologies (npm, Gradle, CocoaPods, Flutter packages, and Docker).

**How it works:** Once a developer (or the CI/CD build server) downloads a package from the internet, the tool caches it on the internal server. From that moment on, even if the entire country loses internet access, all developers in the company can download those packages at local network (LAN) speeds.
