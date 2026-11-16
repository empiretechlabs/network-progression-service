# Service — Network Progression

Next.js clones of the animated **“The Progression”** landing page for Nigeria’s four major carriers.

| Folder    | Brand color | GitHub (standalone) |
|-----------|-------------|---------------------|
| `Airtel/` | `#E40000`   | [airtel-progression](https://github.com/empiretechlabs/airtel-progression) |
| `Glo/`    | `#45B649`   | [glo-progression](https://github.com/empiretechlabs/glo-progression) |
| `MTN/`    | `#FFCB05`   | [mtn-progression](https://github.com/empiretechlabs/mtn-progression) |
| `Etisalat/` | `#00CC52` | [etisalat-progression](https://github.com/empiretechlabs/etisalat-progression) |

Each app cycles: **Unreliable → Negligent → Scam → [carrier name]** with caption *The Suffering Network...*

Each app has:

- **`/`** — Short carrier-style landing (same layout, carrier copy & colors)
- **`/experience`** — Splash slice + “The Progression” animation

## Run one carrier

```bash
cd Airtel   # or Glo, MTN, Etisalat
npm install
npm run dev
```