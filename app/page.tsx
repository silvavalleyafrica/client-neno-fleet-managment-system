"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";

type IconName =
  | "grid"
  | "bus"
  | "route"
  | "ticket"
  | "users"
  | "chart"
  | "settings"
  | "search"
  | "bell"
  | "chevron"
  | "arrow"
  | "more"
  | "clock"
  | "pin"
  | "calendar"
  | "plus"
  | "filter"
  | "external"
  | "check"
  | "close"
  | "menu"
  | "steering";

function Icon({
  name,
  size = 18,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>,
    bus: <><path d="M5 17V5.8A2.8 2.8 0 0 1 7.8 3h8.4A2.8 2.8 0 0 1 19 5.8V17" /><path d="M5 11h14M8 17v2m8-2v2M5 15h14" /><circle cx="8" cy="14" r=".7" /><circle cx="16" cy="14" r=".7" /></>,
    route: <><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h2.5a3.5 3.5 0 0 0 3.5-3.5v-5A3.5 3.5 0 0 1 17.5 6H16" /></>,
    ticket: <><path d="M4 7a2 2 0 0 0 0 4v2a2 2 0 0 0 0 4h16a2 2 0 0 0 0-4v-2a2 2 0 0 0 0-4Z" /><path d="M13 7v2m0 3v2m0 3v.01" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    chart: <><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-5 5" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4L7.3 15a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 2Z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    filter: <><path d="M4 7h16M7 12h10m-7 5h4" /><circle cx="8" cy="7" r="2" /><circle cx="16" cy="12" r="2" /></>,
    external: <><path d="M14 3h7v7m0-7L10 14" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    steering: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" /><path d="M5.6 5.6 10 10m8.4-4.4L14 10m-2 4v7" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const vehicles = [
  { id: "KDA 214B", name: "Neno Express", route: "Nairobi → Nakuru", status: "On route", progress: 68, time: "ETA 10:42 AM", color: "mint", position: "vehicle-one" },
  { id: "KCC 087M", name: "Neno Shuttle", route: "Nairobi → Thika", status: "On route", progress: 42, time: "ETA 09:58 AM", color: "blue", position: "vehicle-two" },
  { id: "KDG 332A", name: "Neno Matatu", route: "Nairobi → Naivasha", status: "On route", progress: 81, time: "ETA 11:15 AM", color: "violet", position: "vehicle-three" },
  { id: "KCH 745B", name: "Neno Shuttle", route: "Thika terminal", status: "At stop", progress: 100, time: "09:20 AM", color: "blue", position: "" },
  { id: "KDN 552C", name: "Neno Express", route: "Wilson workshop", status: "Maintenance", progress: 0, time: "02:30 PM", color: "mint", position: "" },
  { id: "KDM 061T", name: "Neno Matatu", route: "Industrial Area depot", status: "Maintenance", progress: 0, time: "04:00 PM", color: "violet", position: "" },
];

const tripRows = [
  { route: "Nairobi → Nakuru", code: "TR-2408", vehicle: "KDA 214B", driver: "Peter Kamau", departure: "08:30 AM", passengers: "24 / 33", state: "On time", color: "mint" },
  { route: "Nairobi → Thika", code: "TR-2407", vehicle: "KCC 087M", driver: "Grace Wanjiku", departure: "08:15 AM", passengers: "11 / 14", state: "On time", color: "mint" },
  { route: "Nairobi → Naivasha", code: "TR-2406", vehicle: "KDG 332A", driver: "David Kiptoo", departure: "07:45 AM", passengers: "28 / 33", state: "Delayed 8m", color: "amber" },
  { route: "Nairobi → Eldoret", code: "TR-2405", vehicle: "KCF 901L", driver: "Mary Achieng", departure: "07:30 AM", passengers: "31 / 33", state: "On time", color: "mint" },
];

const navigation: { label: string; icon: IconName; href: string; group: string }[] = [
  { label: "Overview", icon: "grid", href: "#overview", group: "workspace" },
  { label: "Fleet", icon: "bus", href: "#fleet", group: "workspace" },
  { label: "Trips", icon: "route", href: "#trips", group: "workspace" },
  { label: "Bookings", icon: "ticket", href: "#bookings", group: "workspace" },
  { label: "Drivers", icon: "users", href: "#drivers", group: "manage" },
  { label: "Routes", icon: "pin", href: "#routes", group: "manage" },
  { label: "Reports", icon: "chart", href: "#reports", group: "manage" },
];

function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-title">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function MapPanel({
  selectedVehicle,
  onSelectVehicle,
}: {
  selectedVehicle: string;
  onSelectVehicle: (id: string) => void;
}) {
  return (
    <section className="panel map-panel" id="routes">
      <div className="panel-heading map-heading">
        <div>
          <div className="heading-with-dot"><span className="live-dot" /> LIVE FLEET MAP</div>
          <h2>Vehicles on the move</h2>
        </div>
        <button className="icon-button map-expand" aria-label="Expand map"><Icon name="external" size={16} /></button>
      </div>
      <div className="map-canvas">
        <div className="map-grid" />
        <svg className="map-roads" viewBox="0 0 700 340" preserveAspectRatio="none" aria-label="Map showing vehicle routes between Nairobi and nearby towns">
          <path className="road minor" d="M-20 240C110 188 130 260 240 208S410 134 720 168" />
          <path className="road minor" d="M20 25C110 96 138 119 240 118S427 55 630 110" />
          <path className="road minor" d="M117 350C164 282 250 270 333 301S519 273 630 345" />
          <path className="road major" d="M40 315C145 274 204 226 290 191S440 122 664 35" />
          <path className="route-line" d="M83 263C164 251 195 213 290 191S438 145 552 94" />
          <path className="route-line route-line-blue" d="M105 75C170 114 218 150 290 191S385 238 470 276" />
          <path className="route-line route-line-purple" d="M290 191C340 157 374 123 423 82" />
        </svg>
        <span className="map-label label-nairobi"><span className="city-pin" />Nairobi</span>
        <span className="map-label label-nakuru">Nakuru</span>
        <span className="map-label label-thika">Thika</span>
        <span className="map-label label-naivasha">Naivasha</span>
        {vehicles.filter((vehicle) => vehicle.position).map((vehicle) => (
          <button
            key={vehicle.id}
            className={`vehicle-marker ${vehicle.position} ${vehicle.color} ${selectedVehicle === vehicle.id ? "selected" : ""}`}
            onClick={() => onSelectVehicle(vehicle.id)}
            aria-label={`Select vehicle ${vehicle.id}`}
            title={vehicle.id}
          >
            <Icon name="bus" size={15} />
          </button>
        ))}
        <div className="map-zoom"><button aria-label="Zoom in">+</button><button aria-label="Zoom out">−</button></div>
        <div className="map-scale"><span /> 10 km</div>
      </div>
      <div className="map-legend">
        <span><i className="legend-dot green" /> On route <b>18</b></span>
        <span><i className="legend-dot gray" /> At stop <b>4</b></span>
        <span><i className="legend-dot orange" /> Attention <b>2</b></span>
        <button className="text-button" onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })}>View all <Icon name="arrow" size={13} /></button>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All vehicles");
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].id);
  const [search, setSearch] = useState("");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [trackCode, setTrackCode] = useState("");
  const [tracked, setTracked] = useState(false);
  const [toast, setToast] = useState("");
  const [activeNav, setActiveNav] = useState("Overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const visibleVehicles = useMemo(() => vehicles.filter((vehicle) => {
    const matchesSearch = `${vehicle.id} ${vehicle.name} ${vehicle.route}`.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === "All vehicles" || vehicle.status === activeFilter;
    return matchesSearch && matchesFilter;
  }), [activeFilter, search]);
  const fleetFilterTotal = activeFilter === "On route" ? 18 : activeFilter === "At stop" ? 4 : activeFilter === "Maintenance" ? 6 : 48;

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 3000);
  }

  function handleBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBookingComplete(true);
  }

  function handleTrack(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (trackCode.trim()) setTracked(true);
  }

  function goToSection(label: string, href: string) {
    setActiveNav(label);
    setMobileNavOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="app-shell" id="overview">
      <aside className={`sidebar ${mobileNavOpen ? "sidebar-open" : ""}`}>
        <a className="brand" href="#overview" onClick={() => setActiveNav("Overview")}>
          <span className="brand-mark"><span /><span /><span /></span>
          <span className="brand-copy"><strong>neno<span>.</span></strong><small>FLEET OPERATIONS</small></span>
        </a>
        <div className="workspace-switcher">
          <div className="workspace-avatar">N</div>
          <div className="workspace-copy"><strong>Neno Fleet</strong><span>Operations team</span></div>
          <Icon name="chevron" size={15} className="workspace-chevron" />
        </div>
        <div className="nav-group">
          <p className="nav-label">WORKSPACE</p>
          {navigation.filter((item) => item.group === "workspace").map((item) => (
            <button key={item.label} className={`nav-item ${activeNav === item.label ? "active" : ""}`} onClick={() => goToSection(item.label, item.href)}>
              <Icon name={item.icon} size={17} /><span>{item.label}</span>
              {item.label === "Trips" && <span className="nav-count">8</span>}
            </button>
          ))}
        </div>
        <div className="nav-group manage-group">
          <p className="nav-label">MANAGE</p>
          {navigation.filter((item) => item.group === "manage").map((item) => (
            <button key={item.label} className={`nav-item ${activeNav === item.label ? "active" : ""}`} onClick={() => goToSection(item.label, item.href)}>
              <Icon name={item.icon} size={17} /><span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="sidebar-bottom">
          <div className="support-card">
            <div className="support-icon"><Icon name="steering" size={18} /></div>
            <strong>Need a hand?</strong>
            <p>Our fleet support team is here to help.</p>
            <button onClick={() => notify("Support team: +254 700 000 000")}>Contact support <Icon name="arrow" size={13} /></button>
          </div>
          <button className="nav-item settings-link" onClick={() => notify("Settings are coming soon.")}><Icon name="settings" size={17} /><span>Settings</span></button>
          <div className="profile-row">
            <div className="profile-avatar">JM</div>
            <div className="profile-copy"><strong>Jane Mwangi</strong><span>Fleet administrator</span></div>
            <button className="profile-more" aria-label="Profile options" onClick={() => notify("Signed in as Jane Mwangi")}><Icon name="more" size={17} /></button>
          </div>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <button className="mobile-menu icon-button" aria-label="Open menu" onClick={() => setMobileNavOpen(!mobileNavOpen)}><Icon name={mobileNavOpen ? "close" : "menu"} /></button>
          <div className="breadcrumb"><span>Workspace</span><Icon name="chevron" size={14} /><strong>{activeNav}</strong></div>
          <div className="topbar-actions">
            <div className="date-chip"><Icon name="calendar" size={15} /><span>Wednesday, 18 November 2026</span></div>
            <button className="icon-button notification-button" aria-label="Notifications" onClick={() => notify("You’re all caught up.")}><Icon name="bell" size={18} /><i /></button>
            <button className="top-avatar" aria-label="Jane Mwangi profile">JM</button>
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow welcome-eyebrow">WEDNESDAY, 18 NOVEMBER 2026 <span className="eyebrow-divider">/</span> NAIROBI, KENYA</p>
              <h1>Good morning, Jane <span className="wave">✦</span></h1>
              <p className="welcome-subtitle">Here&apos;s what&apos;s happening across your fleet today.</p>
            </div>
            <div className="welcome-actions">
              <button className="button button-secondary" onClick={() => setTrackOpen(true)}><Icon name="pin" size={16} /> Track a trip</button>
              <button className="button button-primary" onClick={() => { setBookingOpen(true); setBookingComplete(false); }}><Icon name="plus" size={17} /> Book a trip</button>
            </div>
          </section>

          <section className="stats-grid" aria-label="Fleet statistics">
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon fleet-icon"><Icon name="bus" size={17} /></span><span className="stat-trend positive">↑ 8.2%</span></div>
              <p className="stat-label">Total fleet</p><div className="stat-number">48 <span>vehicles</span></div>
              <div className="stat-foot"><span className="tiny-dot green" /> 42 active <span className="stat-separator">·</span> 6 in maintenance</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon trips-icon"><Icon name="route" size={17} /></span><span className="stat-trend positive">↑ 12.5%</span></div>
              <p className="stat-label">Trips today</p><div className="stat-number">126 <span>trips</span></div>
              <div className="stat-foot"><span className="tiny-dot blue-dot" /> 18 currently on route</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon bookings-icon"><Icon name="ticket" size={17} /></span><span className="stat-trend positive">↑ 6.4%</span></div>
              <p className="stat-label">Bookings today</p><div className="stat-number">1,284 <span>passengers</span></div>
              <div className="stat-foot"><span className="tiny-dot purple-dot" /> 86% seat occupancy</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon revenue-icon"><span>KSh</span></span><span className="stat-trend positive">↑ 4.8%</span></div>
              <p className="stat-label">Revenue today</p><div className="stat-number"><span className="currency">KSh</span> 842,650</div>
              <div className="stat-foot"><span className="tiny-dot orange-dot" /> Across 12 active routes</div>
            </article>
          </section>

          <section className="overview-grid">
            <MapPanel selectedVehicle={selectedVehicle} onSelectVehicle={setSelectedVehicle} />
            <section className="panel performance-panel" id="reports">
              <div className="panel-heading">
                <div><p className="eyebrow">FLEET PERFORMANCE</p><h2>Revenue overview</h2></div>
                <button className="select-button" onClick={() => notify("Showing this week’s revenue.")}>This week <Icon name="chevron" size={13} /></button>
              </div>
              <div className="revenue-summary"><strong>KSh 4,286,500</strong><span className="revenue-change">↗ 12.8%</span><small>vs. last week</small></div>
              <div className="chart-area">
                <div className="chart-y-labels"><span>1.2m</span><span>900k</span><span>600k</span><span>300k</span><span>0</span></div>
                <div className="chart-plot">
                  <div className="chart-gridline line-one" /><div className="chart-gridline line-two" /><div className="chart-gridline line-three" /><div className="chart-gridline line-four" />
                  <svg viewBox="0 0 440 150" preserveAspectRatio="none" className="revenue-chart" aria-label="Revenue chart trending upward throughout the week">
                    <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#3aa77b" stopOpacity=".22" /><stop offset="100%" stopColor="#3aa77b" stopOpacity="0" /></linearGradient></defs>
                    <path d="M0 113C28 102 35 108 60 97S93 87 121 96 155 79 183 75 213 85 245 68 274 59 305 68 339 46 365 43 401 27 440 20V150H0Z" fill="url(#chartFill)" />
                    <path d="M0 113C28 102 35 108 60 97S93 87 121 96 155 79 183 75 213 85 245 68 274 59 305 68 339 46 365 43 401 27 440 20" fill="none" stroke="#27946a" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                    <circle cx="365" cy="43" r="4" fill="white" stroke="#27946a" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="chart-x-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                </div>
              </div>
              <div className="chart-footer"><span><i className="chart-legend-dot" /> This week</span><button className="text-button" onClick={() => notify("Weekly report is ready to export.")}>View report <Icon name="arrow" size={13} /></button></div>
            </section>
          </section>

          <section className="panel fleet-panel" id="fleet">
            <div className="panel-heading fleet-heading">
              <div><p className="eyebrow">REAL-TIME STATUS</p><h2>Fleet overview <span className="heading-count">48</span></h2></div>
              <div className="fleet-controls">
                <label className="search-field"><Icon name="search" size={15} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search vehicles..." /></label>
                <button className="filter-button" onClick={() => setActiveFilter(activeFilter === "All vehicles" ? "On route" : "All vehicles")}><Icon name="filter" size={15} /> Filter <span className="filter-caret">⌄</span></button>
                <button className="button button-secondary compact-button" onClick={() => notify("Fleet list exported.")}>Export <Icon name="arrow" size={13} /></button>
              </div>
            </div>
            <div className="filter-tabs">
              {["All vehicles", "On route", "At stop", "Maintenance"].map((filter) => (
                <button key={filter} className={activeFilter === filter ? "selected" : ""} onClick={() => setActiveFilter(filter)}>{filter}{filter === "All vehicles" && <span>48</span>}{filter === "On route" && <span>18</span>}{filter === "At stop" && <span>4</span>}{filter === "Maintenance" && <span>6</span>}</button>
              ))}
            </div>
            {visibleVehicles.length === 0 ? (
              <div className="empty-filter"><strong>No vehicles match your search</strong><p>Try a different registration or route.</p></div>
            ) : (
              <div className="vehicle-list">
                {visibleVehicles.map((vehicle) => (
                  <button className={`vehicle-row ${selectedVehicle === vehicle.id ? "vehicle-selected" : ""}`} key={vehicle.id} onClick={() => { setSelectedVehicle(vehicle.id); notify(`${vehicle.id} selected on live map.`); }}>
                    <span className={`vehicle-symbol ${vehicle.color}`}><Icon name="bus" size={18} /></span>
                    <span className="vehicle-identity"><strong>{vehicle.id}</strong><small>{vehicle.name}</small></span>
                    <span className="vehicle-route"><span>{vehicle.route}</span><small><i className={`status-dot ${vehicle.status === "Maintenance" ? "dot-maintenance" : vehicle.status === "At stop" ? "dot-stop" : ""}`} /> {vehicle.status}</small></span>
                    <span className="vehicle-progress"><span className="progress-track"><i className={vehicle.status === "Maintenance" ? "progress-maintenance" : ""} style={{ width: `${vehicle.status === "Maintenance" ? 35 : vehicle.progress}%` }} /></span><small>{vehicle.status === "Maintenance" ? "In workshop" : `${vehicle.progress}% complete`}</small></span>
                    <span className="vehicle-eta"><strong>{vehicle.time.replace("ETA ", "")}</strong><small>{vehicle.status === "Maintenance" ? "Estimated return" : vehicle.status === "At stop" ? "Last updated" : "Estimated arrival"}</small></span>
                    <Icon name="chevron" size={16} className="row-chevron" />
                  </button>
                ))}
              </div>
            )}
            <div className="fleet-footer"><span>Showing <strong>{visibleVehicles.length} of {fleetFilterTotal}</strong> vehicles</span><button className="text-button" onClick={() => { setActiveFilter("All vehicles"); setSearch(""); }}>View full fleet <Icon name="arrow" size={13} /></button></div>
          </section>

          <section className="panel trips-panel" id="trips">
            <div className="panel-heading trips-heading">
              <div><p className="eyebrow">ON THE ROAD</p><h2>Active trips <span className="heading-count">8</span></h2></div>
              <button className="text-button" onClick={() => goToSection("Trips", "#trips")}>All trips <Icon name="arrow" size={13} /></button>
            </div>
            <div className="table-scroll">
              <table>
                <thead><tr><th>ROUTE</th><th>VEHICLE</th><th>DRIVER</th><th>DEPARTURE</th><th>PASSENGERS</th><th>STATUS</th><th /></tr></thead>
                <tbody>{tripRows.map((trip) => (
                  <tr key={trip.code}>
                    <td><strong>{trip.route}</strong><small>{trip.code}</small></td>
                    <td><span className="table-vehicle"><Icon name="bus" size={14} />{trip.vehicle}</span></td>
                    <td><span className="driver-avatar">{trip.driver.split(" ").map((part) => part[0]).join("")}</span>{trip.driver}</td>
                    <td>{trip.departure}</td><td>{trip.passengers}</td>
                    <td><span className={`status-pill ${trip.color}`}><i />{trip.state}</span></td>
                    <td><button className="row-action" aria-label={`More options for ${trip.code}`} onClick={() => notify(`${trip.code} trip details opened.`)}><Icon name="more" size={17} /></button></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <div className="trips-footer"><span>Showing <strong>4</strong> of <strong>8</strong> active trips</span><button className="text-button" onClick={() => notify("All active trips are shown.")}>View all trips <Icon name="arrow" size={13} /></button></div>
          </section>

          <section className="operations-grid">
            <section className="panel operations-panel" id="drivers">
              <div className="panel-heading">
                <div><p className="eyebrow">TODAY&apos;S ROSTER</p><h2>Driver shifts <span className="heading-count">32</span></h2></div>
                <button className="text-button" onClick={() => notify("Showing today’s driver roster.")}>View roster <Icon name="arrow" size={13} /></button>
              </div>
              <div className="driver-shift-list">
                <div className="driver-shift"><span className="driver-avatar shift-avatar">PK</span><div><strong>Peter Kamau</strong><small>KDA 214B <i className="status-dot" /> On trip</small></div><span className="shift-time">06:00 – 14:00</span></div>
                <div className="driver-shift"><span className="driver-avatar shift-avatar blue-shift">GW</span><div><strong>Grace Wanjiku</strong><small>KCC 087M <i className="status-dot" /> On trip</small></div><span className="shift-time">06:00 – 14:00</span></div>
                <div className="driver-shift"><span className="driver-avatar shift-avatar violet-shift">DK</span><div><strong>David Kiptoo</strong><small>KDG 332A <i className="status-dot" /> On trip</small></div><span className="shift-time">07:00 – 15:00</span></div>
              </div>
            </section>
            <section className="panel operations-panel" id="bookings">
              <div className="panel-heading">
                <div><p className="eyebrow">PASSENGER ACTIVITY</p><h2>Recent bookings <span className="heading-count">1,284</span></h2></div>
                <button className="text-button" onClick={() => { setBookingOpen(true); setBookingComplete(false); }}>New booking <Icon name="plus" size={13} /></button>
              </div>
              <div className="booking-list">
                <div className="booking-row"><span className="booking-initial">AM</span><span className="booking-person"><strong>Angela Mutua</strong><small>Nairobi → Nakuru · 09:00 AM</small></span><span className="booking-amount">KSh 850</span><span className="booking-state">Confirmed</span></div>
                <div className="booking-row"><span className="booking-initial peach">JO</span><span className="booking-person"><strong>James Otieno</strong><small>Nairobi → Thika · 09:30 AM</small></span><span className="booking-amount">KSh 300</span><span className="booking-state">Confirmed</span></div>
                <div className="booking-row"><span className="booking-initial lilac">CW</span><span className="booking-person"><strong>Caroline Wairimu</strong><small>Nairobi → Naivasha · 10:00 AM</small></span><span className="booking-amount">KSh 650</span><span className="booking-state pending-state">Pending</span></div>
              </div>
            </section>
          </section>

          <footer className="page-footer"><span>© 2026 Neno Fleet. Built for the journey.</span><span><i className="footer-live-dot" /> All systems operational <span className="footer-divider">·</span> Last synced just now</span></footer>
        </div>
      </div>

      {bookingOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setBookingOpen(false); }}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
            <button className="modal-close icon-button" aria-label="Close booking dialog" onClick={() => setBookingOpen(false)}><Icon name="close" /></button>
            {bookingComplete ? (
              <div className="success-state"><span className="success-icon"><Icon name="check" size={24} /></span><p className="eyebrow">BOOKING CONFIRMED</p><h2>You&apos;re all set.</h2><p>Your seat is reserved. A confirmation has been sent to your phone.</p><div className="confirmation-code">Booking reference <strong>NENO-2814</strong></div><button className="button button-primary modal-submit" onClick={() => setBookingOpen(false)}>Done</button></div>
            ) : (
              <>
                <div className="modal-kicker"><span className="modal-brand-mark"><span /><span /><span /></span> NENO TRAVEL</div>
                <p className="eyebrow">YOUR NEXT JOURNEY</p><h2 id="booking-title">Book a trip</h2><p className="modal-description">Find your seat and get moving.</p>
                <form onSubmit={handleBooking} className="modal-form">
                  <label>From<select required defaultValue="Nairobi"><option>Nairobi</option><option>Nakuru</option><option>Thika</option><option>Eldoret</option></select></label>
                  <label>To<select required defaultValue=""><option value="" disabled>Select destination</option><option>Nakuru</option><option>Thika</option><option>Naivasha</option><option>Eldoret</option></select></label>
                  <div className="form-two-col"><label>Travel date<input required type="date" defaultValue="2026-11-18" /></label><label>Passengers<select defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4</option></select></label></div>
                  <label>Passenger name<input required placeholder="Your full name" /></label>
                  <button className="button button-primary modal-submit" type="submit">Search available trips <Icon name="arrow" size={15} /></button>
                </form>
                <p className="secure-note"><Icon name="check" size={13} /> Secure booking · Pay on board or via M-Pesa</p>
              </>
            )}
          </section>
        </div>
      )}

      {trackOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) { setTrackOpen(false); setTracked(false); } }}>
          <section className="modal track-modal" role="dialog" aria-modal="true" aria-labelledby="track-title">
            <button className="modal-close icon-button" aria-label="Close tracking dialog" onClick={() => { setTrackOpen(false); setTracked(false); }}><Icon name="close" /></button>
            <div className="track-icon"><Icon name="pin" size={21} /></div><p className="eyebrow">LIVE JOURNEY UPDATES</p><h2 id="track-title">Track your trip</h2><p className="modal-description">Enter your booking reference to see your vehicle&apos;s live location.</p>
            <form className="modal-form" onSubmit={handleTrack}><label>Booking reference<input value={trackCode} onChange={(event) => { setTrackCode(event.target.value); setTracked(false); }} required placeholder="e.g. NENO-2814" /></label><button className="button button-primary modal-submit">Find my trip <Icon name="arrow" size={15} /></button></form>
            {tracked && <div className="tracking-result"><span className="tracking-result-icon"><Icon name="bus" size={17} /></span><div><strong>Trip found · KDA 214B</strong><p>Nairobi → Nakuru · 18 min from your pickup</p></div><span className="tracking-live"><i /> LIVE</span></div>}
            <p className="secure-note"><Icon name="clock" size={13} /> Location updates every 30 seconds</p>
          </section>
        </div>
      )}

      {toast && <div className="toast"><span className="toast-icon"><Icon name="check" size={15} /></span>{toast}</div>}
    </main>
  );
}
