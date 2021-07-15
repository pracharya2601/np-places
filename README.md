# Np Places

[![Build Status](https://travis-ci.com/pracharya2601/np-places.svg?branch=main)](https://travis-ci.com/pracharya2601/np-places)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

Npm module for getting state, district and city of Nepal.

## Installation

Install my-project with npm or yarn

```bash
  npm install np-places
  yarn add np-places
```

```bash
  import places from "np-places"

  or

  const places = require("np-places")
```

```bash
    const district = places.districts

    Response:
    [
        'sindhuli',
        'Ramechhap',
        'Dolakha',
        'Bhaktapur',
        'Dhading',
        'Kathmandu',
        'Kavrepalanchok',
        'Lalitpur',
        'Nuwakot',
        .... more
    ]
```

```bash
    const state = places.state

    Response:
    [
        'Kathmandu Kshetra',
        'Arun Kshetra',
        'Janakpur Kshetra',
        'Gandak Kshetra',
        'Kapilavastu Kshetra',
        'Karnali Kshetra',
        'Mahakali Kshetra',
    ]
```

```bash
    const dsitrictFromState = places.districtList('Kathmandu Kshetra')

    Response: all the district form passed state.
    [
        'sindhuli',
        'Ramechhap',
        'Dolakha',
        'Bhaktapur',
        'Dhading',
        'Kathmandu',
        'Kavrepalanchok',
        'Lalitpur',
        'Nuwakot',
        'Rasuwa',
        'Sindupalchok',
        'Chitwan',
        'Makwanpur'
    ]
```

## Run Locally

Clone the project

```bash
  git clone git@github.com:pracharya2601/np-places.git
```

Go to the project directory

```bash
  cd np-places
```

Install dependencies

```bash
  npm install
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
