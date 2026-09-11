/* ==========================================
   CRIME PORTAL - CITIZEN DASHBOARD
   Modern Responsive UI
========================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {

    --primary: #b91c1c;
    --primary-dark: #991b1b;
    --primary-light: #fee2e2;

    --dark: #111827;
    --dark-2: #1f2937;

    --text: #1f2937;
    --muted: #6b7280;

    --white: #ffffff;

    --background: #f5f7fb;

    --border: #e5e7eb;

    --green: #16a34a;
    --green-light: #dcfce7;

    --orange: #f59e0b;
    --orange-light: #fef3c7;

    --blue: #2563eb;
    --blue-light: #dbeafe;

    --shadow:
        0 10px 30px rgba(15, 23, 42, 0.08);

}


/* ==========================================
   BODY
========================================== */

body {

    font-family:
        "Segoe UI",
        Arial,
        sans-serif;

    background: var(--background);

    color: var(--text);

    min-height: 100vh;

}


/* ==========================================
   SIDEBAR
========================================== */

.sidebar {

    position: fixed;

    left: 0;
    top: 0;

    width: 260px;

    height: 100vh;

    background:
        linear-gradient(
            180deg,
            #190707,
            #260b0b
        );

    color: white;

    padding: 25px 18px;

    z-index: 1000;

    display: flex;

    flex-direction: column;

    box-shadow:
        5px 0 25px rgba(0, 0, 0, 0.12);

}


/* ==========================================
   LOGO
========================================== */

.logo {

    display: flex;

    align-items: center;

    gap: 12px;

    padding:
        5px 10px 28px;

    border-bottom:
        1px solid rgba(255,255,255,0.1);

}


.logo-icon {

    width: 48px;

    height: 48px;

    border-radius: 14px;

    background:
        linear-gradient(
            135deg,
            #dc2626,
            #991b1b
        );

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 23px;

    box-shadow:
        0 8px 20px rgba(220,38,38,.25);

}


.logo h2 {

    font-size: 21px;

    letter-spacing: .3px;

}


.logo h2 span {

    color: #ef4444;

}


.logo small {

    display: block;

    color: #9ca3af;

    margin-top: 3px;

    font-size: 11px;

}


/* ==========================================
   MENU
========================================== */

.menu {

    margin-top: 25px;

    flex: 1;

}


.menu-item {

    display: flex;

    align-items: center;

    gap: 13px;

    color: #d1d5db;

    text-decoration: none;

    padding: 13px 14px;

    margin-bottom: 7px;

    border-radius: 10px;

    font-size: 14px;

    transition:
        .25s ease;

}


.menu-item i {

    width: 20px;

    text-align: center;

    font-size: 16px;

}


.menu-item:hover {

    background:
        rgba(255,255,255,.08);

    color: white;

    transform:
        translateX(3px);

}


.menu-item.active {

    background:
        linear-gradient(
            90deg,
            #dc2626,
            #b91c1c
        );

    color: white;

    box-shadow:
        0 7px 20px
        rgba(185,28,28,.25);

}


.notification-count {

    margin-left: auto;

    background: #ef4444;

    color: white;

    font-size: 11px;

    min-width: 21px;

    height: 21px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

}


/* ==========================================
   SIDEBAR BOTTOM
========================================== */

.sidebar-bottom {

    padding-top: 15px;

    border-top:
        1px solid rgba(255,255,255,.1);

}


.logout-btn {

    width: 100%;

    display: flex;

    align-items: center;

    gap: 13px;

    padding: 13px 14px;

    background: transparent;

    border: none;

    color: #d1d5db;

    cursor: pointer;

    border-radius: 10px;

    font-size: 14px;

    transition: .25s;

}


.logout-btn:hover {

    background:
        rgba(239,68,68,.15);

    color: #f87171;

}


/* ==========================================
   MAIN CONTENT
========================================== */

.main-content {

    margin-left: 260px;

    min-height: 100vh;

    padding: 25px 35px;

}


/* ==========================================
   TOP BAR
========================================== */

.topbar {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 30px;

}


.page-title h1 {

    font-size: 28px;

    color: #111827;

}


.page-title p {

    margin-top: 5px;

    color: var(--muted);

    font-size: 14px;

}


.top-actions {

    display: flex;

    align-items: center;

    gap: 20px;

}


/* ==========================================
   NOTIFICATION BUTTON
========================================== */

.notification-btn {

    width: 43px;

    height: 43px;

    border: 1px solid var(--border);

    background: white;

    border-radius: 12px;

    cursor: pointer;

    color: #4b5563;

    position: relative;

    transition: .25s;

}


.notification-btn:hover {

    color: var(--primary);

    box-shadow:
        0 5px 15px rgba(0,0,0,.08);

}


.notification-dot {

    position: absolute;

    top: 8px;

    right: 8px;

    width: 8px;

    height: 8px;

    border-radius: 50%;

    background: #ef4444;

    border: 2px solid white;

}


/* ==========================================
   PROFILE
========================================== */

.profile {

    display: flex;

    align-items: center;

    gap: 10px;

    cursor: pointer;

    position: relative;

}


.profile-image {

    width: 43px;

    height: 43px;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            #fee2e2,
            #fecaca
        );

    color: var(--primary);

    display: flex;

    align-items: center;

    justify-content: center;

}


.profile-info strong {

    display: block;

    font-size: 14px;

}


.profile-info small {

    color: var(--muted);

    font-size: 11px;

}


.profile > i {

    color: #9ca3af;

    font-size: 11px;

}


/* ==========================================
   PROFILE DROPDOWN
========================================== */

.profile-dropdown {

    position: absolute;

    top: 55px;

    right: 0;

    width: 200px;

    background: white;

    border-radius: 12px;

    padding: 8px;

    box-shadow:
        0 15px 35px
        rgba(0,0,0,.15);

    z-index: 2000;

}


.profile-dropdown a,
.profile-dropdown button {

    display: flex;

    align-items: center;

    gap: 10px;

    width: 100%;

    padding: 11px;

    border: none;

    background: transparent;

    color: #374151;

    text-decoration: none;

    cursor: pointer;

    border-radius: 8px;

    font-size: 13px;

    text-align: left;

}


.profile-dropdown a:hover,
.profile-dropdown button:hover {

    background: #f3f4f6;

}


.profile-dropdown button {

    color: #dc2626;

}


/* ==========================================
   WELCOME CARD
========================================== */

.welcome-card {

    background:
        linear-gradient(
            135deg,
            #991b1b,
            #dc2626
        );

    border-radius: 20px;

    padding: 35px 40px;

    color: white;

    display: flex;

    align-items: center;

    justify-content: space-between;

    overflow: hidden;

    position: relative;

    margin-bottom: 32px;

    box-shadow:
        0 15px 35px
        rgba(185,28,28,.2);

}


.welcome-card::after {

    content: "";

    position: absolute;

    width: 280px;

    height: 280px;

    border-radius: 50%;

    background:
        rgba(255,255,255,.07);

    right: 60px;

    top: -120px;

}


.welcome-text {

    position: relative;

    z-index: 2;

}


.welcome-label {

    display: inline-flex;

    align-items: center;

    gap: 7px;

    font-size: 13px;

    color: #fecaca;

    margin-bottom: 10px;

}


.welcome-text h2 {

    font-size: 30px;

    margin-bottom: 9px;

}


.welcome-text p {

    color: #fee2e2;

    font-size: 14px;

    max-width: 600px;

    line-height: 1.6;

}


/* ==========================================
   PRIMARY BUTTON
========================================== */

.primary-btn {

    display: inline-flex;

    align-items: center;

    gap: 8px;

    margin-top: 20px;

    background: white;

    color: var(--primary);

    padding: 12px 18px;

    border-radius: 9px;

    text-decoration: none;

    font-weight: 600;

    font-size: 13px;

    transition: .25s;

}


.primary-btn:hover {

    transform:
        translateY(-2px);

    box-shadow:
        0 8px 20px
        rgba(0,0,0,.15);

}


.welcome-icon {

    position: relative;

    z-index: 2;

    width: 120px;

    height: 120px;

    border-radius: 50%;

    background:
        rgba(255,255,255,.1);

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 65px;

    margin-right: 30px;

}


/* ==========================================
   SECTION
========================================== */

.section {

    margin-bottom: 32px;

}


.section-heading {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 18px;

}


.section-heading h2 {

    font-size: 19px;

    color: #111827;

}


.section-heading p {

    color: var(--muted);

    font-size: 13px;

    margin-top: 4px;

}


/* ==========================================
   STATISTICS
========================================== */

.stats-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

}


.stat-card {

    background: white;

    border: 1px solid var(--border);

    border-radius: 16px;

    padding: 22px;

    display: flex;

    align-items: center;

    gap: 15px;

    box-shadow:
        0 5px 20px
        rgba(15,23,42,.04);

    transition: .25s;

}


.stat-card:hover {

    transform:
        translateY(-4px);

    box-shadow:
        var(--shadow);

}


.stat-icon {

    width: 52px;

    height: 52px;

    min-width: 52px;

    border-radius: 13px;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 20px;

}


.stat-icon.total {

    background: var(--blue-light);

    color: var(--blue);

}


.stat-icon.pending {

    background: var(--orange-light);

    color: var(--orange);

}


.stat-icon.investigation {

    background: #ede9fe;

    color: #7c3aed;

}


.stat-icon.resolved {

    background: var(--green-light);

    color: var(--green);

}


.stat-content span {

    color: var(--muted);

    font-size: 12px;

}


.stat-content h3 {

    font-size: 25px;

    margin: 3px 0;

    color: #111827;

}


.stat-content small {

    color: var(--muted);

    font-size: 10px;

}


.stat-content small i {

    color: var(--green);

}


/* ==========================================
   QUICK ACTIONS
========================================== */

.quick-actions {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

}


.action-card {

    background: white;

    border: 1px solid var(--border);

    border-radius: 15px;

    padding: 20px;

    display: flex;

    align-items: center;

    gap: 13px;

    text-decoration: none;

    color: inherit;

    transition: .25s;

}


.action-card:hover {

    border-color:
        #fecaca;

    transform:
        translateY(-3px);

    box-shadow:
        var(--shadow);

}


.action-icon {

    width: 45px;

    height: 45px;

    min-width: 45px;

    background:
        var(--primary-light);

    color: var(--primary);

    border-radius: 11px;

    display: flex;

    align-items: center;

    justify-content: center;

}


.action-card h3 {

    font-size: 14px;

    margin-bottom: 4px;

}


.action-card p {

    font-size: 11px;

    color: var(--muted);

}


.action-arrow {

    margin-left: auto;

    color: #9ca3af;

    font-size: 12px;

    transition: .25s;

}


.action-card:hover .action-arrow {

    color: var(--primary);

    transform:
        translateX(3px);

}


/* ==========================================
   COMPLAINT SECTION
========================================== */

.complaints-section {

    background: white;

    border: 1px solid var(--border);

    border-radius: 18px;

    padding: 25px;

    box-shadow:
        0 5px 20px
        rgba(15,23,42,.04);

}


.view-all {

    display: inline-flex;

    align-items: center;

    gap: 7px;

    text-decoration: none;

    color: var(--primary);

    font-size: 13px;

    font-weight: 600;

}


.view-all:hover {

    text-decoration: underline;

}


/* ==========================================
   TABLE
========================================== */

.table-container {

    width: 100%;

    overflow-x: auto;

}


table {

    width: 100%;

    border-collapse: collapse;

    min-width: 750px;

}


thead {

    background: #f9fafb;

}


th {

    text-align: left;

    padding: 14px;

    color: #6b7280;

    font-size: 11px;

    font-weight: 600;

    border-bottom:
        1px solid var(--border);

}


td {

    padding: 15px 14px;

    border-bottom:
        1px solid #f0f0f0;

    font-size: 13px;

    color: #374151;

}


tbody tr {

    transition: .2s;

}


tbody tr:hover {

    background: #fafafa;

}


td strong {

    color: var(--primary);

}


/* ==========================================
   STATUS
========================================== */

.status {

    display: inline-flex;

    align-items: center;

    padding: 6px 10px;

    border-radius: 20px;

    font-size: 10px;

    font-weight: 600;

}


.status.investigating {

    background: #ede9fe;

    color: #6d28d9;

}


.status.pending {

    background: #fef3c7;

    color: #b45309;

}


.status.resolved {

    background: #dcfce7;

    color: #15803d;

}


/* ==========================================
   VIEW BUTTON
========================================== */

.view-btn {

    border: 1px solid #fecaca;

    background: #fff5f5;

    color: var(--primary);

    padding: 7px 13px;

    border-radius: 7px;

    cursor: pointer;

    font-size: 11px;

    font-weight: 600;

    transition: .2s;

}


.view-btn:hover {

    background: var(--primary);

    color: white;

}


/* ==========================================
   NOTIFICATION POPUP
========================================== */

.notification-popup {

    position: fixed;

    top: 80px;

    right: 35px;

    width: 360px;

    background: white;

    border-radius: 15px;

    box-shadow:
        0 20px 45px
        rgba(0,0,0,.18);

    z-index: 3000;

    overflow: hidden;

    border:
        1px solid var(--border);

}


.notification-header {

    padding: 17px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    border-bottom:
        1px solid var(--border);

}


.notification-header h3 {

    font-size: 15px;

}


.notification-header span {

    background: #fee2e2;

    color: #b91c1c;

    font-size: 10px;

    padding: 5px 8px;

    border-radius: 10px;

}


.notification-item {

    display: flex;

    gap: 12px;

    padding: 15px;

    border-bottom:
        1px solid #f3f4f6;

}


.notification-item > i {

    width: 35px;

    height: 35px;

    min-width: 35px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background: #fee2e2;

    color: #b91c1c;

}


.notification-item strong {

    font-size: 12px;

}


.notification-item p {

    font-size: 11px;

    color: #6b7280;

    margin-top: 3px;

    line-height: 1.4;

}


.notification-item small {

    display: block;

    color: #9ca3af;

    font-size: 9px;

    margin-top: 5px;

}


.notification-footer {

    display: block;

    text-align: center;

    padding: 13px;

    color: var(--primary);

    font-size: 11px;

    text-decoration: none;

    font-weight: 600;

}


/* ==========================================
   MOBILE MENU
========================================== */

.mobile-menu {

    display: none;

    width: 42px;

    height: 42px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 10px;

    align-items: center;

    justify-content: center;

    cursor: pointer;

}


/* ==========================================
   FOOTER
========================================== */

footer {

    margin-top: 35px;

    padding: 22px 0;

    border-top:
        1px solid var(--border);

    display: flex;

    align-items: center;

    justify-content: space-between;

    color: #9ca3af;

    font-size: 11px;

}


footer div {

    display: flex;

    gap: 20px;

}


footer a {

    color: #6b7280;

    text-decoration: none;

}


footer a:hover {

    color: var(--primary);

}


/* ==========================================
   RESPONSIVE - TABLET
========================================== */

@media (max-width: 1200px) {

    .stats-grid {

        grid-template-columns:
            repeat(2, 1fr);

    }

    .quick-actions {

        grid-template-columns:
            repeat(2, 1fr);

    }

}


/* ==========================================
   RESPONSIVE - MOBILE
========================================== */

@media (max-width: 900px) {

    .sidebar {

        transform:
            translateX(-100%);

        transition:
            .3s ease;

    }


    .sidebar.mobile-open {

        transform:
            translateX(0);

    }


    .main-content {

        margin-left: 0;

        padding:
            20px;

    }


    .mobile-menu {

        display: flex;

    }


    .topbar {

        gap: 15px;

    }


    .page-title {

        flex: 1;

        margin-left: 5px;

    }


    .page-title h1 {

        font-size: 21px;

    }


    .page-title p {

        display: none;

    }


    .profile-info,
    .profile > i {

        display: none;

    }


    .welcome-card {

        padding: 25px;

    }


    .welcome-icon {

        width: 85px;

        height: 85px;

        font-size: 45px;

        margin-right: 0;

    }


    .welcome-text h2 {

        font-size: 24px;

    }

}


/* ==========================================
   SMALL MOBILE
========================================== */

@media (max-width: 600px) {

    .main-content {

        padding: 15px;

    }


    .stats-grid {

        grid-template-columns: 1fr;

    }


    .quick-actions {

        grid-template-columns: 1fr;

    }


    .welcome-card {

        display: block;

    }


    .welcome-icon {

        display: none;

    }


    .welcome-text h2 {

        font-size: 22px;

    }


    .complaints-section {

        padding: 15px;

    }


    .section-heading h2 {

        font-size: 17px;

    }


    footer {

        display: block;

        text-align: center;

    }


    footer div {

        justify-content: center;

        margin-top: 10px;

    }


    .notification-popup {

        width:
            calc(100% - 30px);

        right: 15px;

        top: 70px;

    }

}


fetch("http://localhost:8080/api/ai/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: text
    })
})
.then(res => res.json())
.then(data => {
    console.log(data.reply);
});