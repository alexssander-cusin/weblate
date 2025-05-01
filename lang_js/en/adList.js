export default {
  tabs: {
    sort: {
      title: 'Sort',
      options: {
        relevant: 'Relevant',
        online: 'Online',
        proximity: 'Proximity'
      }
    },
    filter: {
      title: 'Filter',
      drawer: {
        title: 'Filter',
        filterQuantity: '1 Filter | {quantity} Filters',
        options: {
          filterByValue: {
            title: 'Filter by <strong>rate:</strong>',
            beforeMinValue: '',
            afterMaxValue: 'up to'
          },
          filterByAge: {
            title: 'Filter by <strong>age:</strong>',
            afterMinValue: 'years old',
            beforeMaxValue: 'up to',
            afterMaxValue: 'Years old'
          },
          filterByServicePreference: {
            title: 'Filter by <strong>service preference:</strong>'
          }
        },
        footer: {
          closeButton: 'Close',
          seeResultsButton: 'Check the results',
          cleanFiltersButton: 'Clean filters'
        }
      }
    }
  },
  card: {
    talkToMeButton: 'See phone number'
  },
  modal: {
    seeContactModal: {
      title: 'Phones',
      copiedNumber: 'Number was copied!',
      disabledPhone: 'Advertiser outside office hours.'
    },
    geolocation: {
      title: 'allow<br /><b>geolocation</b>',
      seeEscortsAllowingLocation:
        'Check <b>escorts next to you</b> allowing geolocation access.',
      privacyAdviceTitle: 'Privacy advice',
      privacyAdviceMessage:
        'Your location will not be shared with others users.',
      allowLocationButton: 'I want to activate',
      disabledLocation:
        'Your geolocation is disabled. Enable manually. Know how:',
      androidTutorial: 'On your Android phone',
      iphoneTutorial: 'On your iPhone phone',
      computerTutorial: 'On your computer'
    }
  }
}
