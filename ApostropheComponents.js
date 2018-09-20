/* eslint no-unused-vars: 0 */
import Vue from 'vue'

// The remainder of this file would be dynamically built by apostrophe's
// pipeline, "importing all apostrophe vue components". This only has to
// be imported once and that is done solely for the side effect of
// importing them all, from various npm modules etc. registered with Apostrophe.
// -Tom and Brian

import ApostropheManagePieces from './components/ApostropheManagePieces'
Vue.component('ApostropheManagePieces', ApostropheManagePieces)
import ApostropheChooser from './components/ApostropheChooser'
Vue.component('ApostropheChooser', ApostropheChooser)
import ApostropheBrowser from './components/ApostropheBrowser'
Vue.component('ApostropheBrowser', ApostropheBrowser)
import AlternateChooser from './components/AlternateChooser'
Vue.component('AlternateChooser', AlternateChooser)
