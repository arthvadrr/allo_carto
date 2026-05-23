# Allô Carto

**_Work in progress!_**

![App preview](preview.gif)

## Dev Notes

- May 15, 2026 | Started rebuilding in React Native. I preserved the flutter version under branch `v1-flutter`.

## Style Guide

### Colors

#### Dark

- Primary : `#1C5B5E`

- Secondary : `#762D3D`

- Text : `#121212`

- Background : `#131A1B`

- Border : `#1B2B31`

- Secondary Border : `#382326`

#### Light

- Primary: `#7BADA6`

- Secondary: `#E09FAD`

- Text: `#F7F7F7`

- Background: `#8CABA0`

- Border: `#465B5D`

- Secondary Border: `#6B474B`

### Alerts

#### Dark

- Success: #032B1C

- Warning: #332105

- Danger: #3E0E14

#### Light

- Success: #DDFFD6

- Warning: #FFC670

- Danger: #FF7081

### Fonts

**Lexend** is used throughout the application. The font is included in `app/assets/fonts/lexend-variable.ttf` and loaded asychonously via the `useFonts` hook via expo.

https://blog.logrocket.com/how-to-add-custom-fonts-react-native/

## Feature Word Rankings

Use material icons

icons available: fibernew, stars, militarytech, emojievents, diamond

Fibernew - for new words - rank new

import FiberNewIcon from '@mui/icons-material/FiberNew'; import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';

stars - for 5 times - rank bronze

import StarsIcon from '@mui/icons-material/Stars';

militarytech - for 10 times - rank silver

import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'; import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

emojievents - for 20 times - rank gold

diamond - for 40 times - rank platinum

psychology - for 80 times - rank memorized

silver: #e1e7ef;

gold: #ffc57a;

diamond: #9ddaff;

memorized: #00ffcf
