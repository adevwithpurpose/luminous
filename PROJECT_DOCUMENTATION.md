# Luminous Face Yoga - Redesign Pitch Documentation

This repository contains the optimized, high-converting HTML/CSS demo built for pitching the Luminous Face Yoga website redesign.

## 1. The Audit & Pain Points

**Customer Objections Handled:**

- **Skepticism**: Addressed immediately via high-opacity social proof, clinical imagery, and featured publication logos above the fold.
- **Overwhelm**: Replaced the confusing multi-page course index with a guided, 3-path funnel ("The Foundation," "Quick Fixes," "Live Studio").
- **Time Constraints**: Highlighted the "5 minutes a day" messaging.

**Brand Pain Points (Before):**

- **Cluttered Navigation**: 3 separate rows of navigation and meta-links in the header.
- **"Clinical" Aesthetic**: Elementor-style layouts with hard edges and a generic aqua color scheme.
- **Diluted CTAs**: Too many competing buttons ("Start Today", "Buy Now", "Our Story") lacking a clear user journey.

## 2. Redesign Strategy: "Luminous Glow"

The new demo site was built utilizing a custom premium design system (`styles.css`):

- **Aesthetic**: "Quiet Luxury" utilizing soft glassmorphism (`backdrop-filter: blur`), removing harsh box-shadows in favor of subtle, tinted glows.
- **Colors**: Transitioned to a softer palette of Pearl White (`#FAFAFA`), Luminous Pink (`#EC4899`), and Deep Slate for text ensure 4.5:1 text contrast.
- **Typography**:
  - `Playfair Display` for high-end, editorial-style headings.
  - `Instrument Sans` for ultra-readable body content.

### The Content/Copy Strategy: "Rituals, Not Just Workouts"

- Shifted messaging from "exercise" to "self-care" and "radiance".
- **Headline Shift**: "Reveal Your Radiance Naturally."
- **Focus**: Emphasizing the transformation (Lift, Firm, Glow).

## 3. Technical Pitch Strategy (The CMS Question)

When presenting, the client will likely ask about their massive WordPress database of videos and existing customer subscriptions.

**The Pitch Answer:**
*"We are keeping your secure WordPress backend exactly as it is. Your team won't have to relearn how to upload videos or manage subscriptions. This redesign focuses entirely on decoupling and upgrading the 'front storefront' to this premium, modern experience. Your data remains untouched and perfectly safe."*

## 4. Deployment Pipeline

This demo auto-deploys from GitHub `main` via cPanel Git Version Control to a live subdomain.

**cPanel Configuration (`.cpanel.yml`):**
The repository includes a cPanel deploy script. When triggered via the cPanel interface ("Update from Remote" -> "Deploy HEAD Commit"), it executes:

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/dronecul/luminous.outafbox.com
    - /bin/mkdir -p $DEPLOYPATH
    - /bin/cp -rf * $DEPLOYPATH/
```

*Author: Generated for Pitch Demo, March 2026*
