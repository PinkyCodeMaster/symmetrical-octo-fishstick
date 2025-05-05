<!-- Improved compatibility of back to top link -->
<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]

<br />
<div align="center">
  <a href="https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">symmetrical-octo-fishstick</h3>

  <p align="center">
    A full-stack boilerplate for backend, mobile, admin, and web apps using modern tools.
    <br />
    <a href="https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick">View Repo</a>
    &middot;
    <a href="https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This is a personal boilerplate project for rapidly building full-stack apps with a modern stack. It includes a Hono backend, a Vite-powered admin panel, a Next.js web app, and an Expo mobile app—all ready to integrate with Resend, Drizzle ORM, Neon, BetterAuth, Stripe, and OpenAPI for SDKs and API docs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [Next.js](https://nextjs.org/)
* [Vite](https://vitejs.dev/)
* [Expo](https://expo.dev/)
* [Hono](https://hono.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Clone the monorepo and begin development.

```sh
git clone https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick.git
cd symmetrical-octo-fishstick
pnpm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Start any app in the monorepo using:

```sh
pnpm dev --filter web
pnpm dev --filter admin
pnpm dev --filter native
pnpm dev --filter server
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Turborepo setup with `web`, `admin`, `native`, `server`
- [ ] Resend integration
- [ ] Neon Postgres + Drizzle ORM
- [ ] OpenAPI integration
- [ ] BetterAuth integration
- [ ] Stripe payments
- [ ] shadcn/ui for admin/web UI
- [ ] Auth flow in native app

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

1. Fork the repo
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add YourFeature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

License not yet defined.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Scott Jones - scott-w-jones@hotmail.com  
Project Repo: [symmetrical-octo-fishstick](https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [shadcn/ui](https://ui.shadcn.com)
* [Resend](https://resend.com)
* [Drizzle ORM](https://orm.drizzle.team)
* [Neon](https://neon.tech)
* [Stripe](https://stripe.com)
* [OpenAPI](https://www.openapis.org)
* [Hono](https://hono.dev)
* [NativeWind](https://www.nativewind.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/PinkyCodeMaster/symmetrical-octo-fishstick.svg?style=for-the-badge
[contributors-url]: https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PinkyCodeMaster/symmetrical-octo-fishstick.svg?style=for-the-badge
[forks-url]: https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick/network/members
[stars-shield]: https://img.shields.io/github/stars/PinkyCodeMaster/symmetrical-octo-fishstick.svg?style=for-the-badge
[stars-url]: https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick/stargazers
[issues-shield]: https://img.shields.io/github/issues/PinkyCodeMaster/symmetrical-octo-fishstick.svg?style=for-the-badge
[issues-url]: https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick/issues
[license-shield]: https://img.shields.io/github/license/PinkyCodeMaster/symmetrical-octo-fishstick.svg?style=for-the-badge
[license-url]: https://github.com/PinkyCodeMaster/symmetrical-octo-fishstick/blob/master/LICENSE.txt
