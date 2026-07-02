// @forgeax/dashboard — public entry for the dashboard L2 app.
//
// The Overview / Sessions / Analytics overlay. Its DATA (sessions, telemetry,
// dashboard-api) lives in @forgeax/interface's L1 store + lib; this package is
// the presentation over it. studio (L3) injects it via the interface
// `renderDashboard` slot; interface (L1) never imports this package.
export { Dashboard } from './components/Dashboard/Dashboard';
