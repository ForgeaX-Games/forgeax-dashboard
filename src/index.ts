// @forgeax/dashboard — public entry for the dashboard L2 app.
//
// The Overview / Sessions / Analytics overlay. Studio (L3) injects it via the
// interface `renderDashboard` slot; interface (L1) never imports this package.
// Some dashboard data clients still live in @forgeax/interface and remain
// scheduled for ownership cleanup in the interface-architecture refactor.
export { Dashboard } from './components/Dashboard/Dashboard';
