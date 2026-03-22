# Requirements Document

## Introduction

Sanifort Pre-School in Hanumangarh, Rajasthan already has a functional website (Home, About, Programs, Admissions, Gallery, Contact) built with HTML/CSS/JavaScript. This spec covers the **enhancements and new features** needed to elevate it into a full premium digital educational platform. The focus is on: a Blog page, a Testimonials page, a Virtual Tour section, an Event Calendar, a Parent Dashboard wireframe (future-ready), a QR code entry system, SEO structured data, and overall design system refinements — all targeting mobile-first parents aged 25–40 searching for the best preschool in Hanumangarh.

---

## Glossary

- **Platform**: The complete Sanifort Pre-School website and its digital features.
- **Website**: The HTML/CSS/JS static site hosted for Sanifort Pre-School.
- **Parent**: A user aged 25–40 visiting the Platform to evaluate or interact with the school.
- **Admin**: A school staff member who manages content, events, and QR codes.
- **Blog_Page**: The new `blog.html` page listing SEO-optimised articles.
- **Blog_Post**: An individual article page (`blog-post.html`) with structured content.
- **Testimonials_Page**: The new `testimonials.html` page aggregating all parent reviews.
- **Virtual_Tour_Section**: An embedded interactive section on the Home or About page showcasing campus areas via 360° embeds or video.
- **Event_Calendar**: An interactive monthly calendar widget on a dedicated `events.html` page.
- **Parent_Dashboard**: A future-ready wireframe page (`dashboard.html`) showing the planned parent portal UI.
- **QR_System**: A QR code generation and display feature for contactless child check-in/check-out.
- **Structured_Data**: JSON-LD schema markup embedded in HTML pages for Google rich results.
- **Design_System**: The shared CSS variables, component classes, and spacing rules in `css/style.css`.
- **CTA**: Call-to-action button or link prompting a conversion action (enroll, call, WhatsApp).
- **Trust_Signal**: A visual element (badge, rating, certification mark) that builds parent confidence.
- **WhatsApp_Button**: The fixed floating button linking to the school's WhatsApp number.

---

## Requirements

### Requirement 1: Blog Page

**User Story:** As a parent, I want to read educational articles and school news on a blog, so that I can stay informed and trust the school's expertise.

#### Acceptance Criteria

1. THE Platform SHALL include a `blog.html` page listing blog post cards with title, excerpt, category tag, date, and a "Read More" link.
2. THE Platform SHALL include a `blog-post.html` template page rendering a full article with heading, author, date, body content, and a related posts section.
3. WHEN a parent visits `blog.html`, THE Blog_Page SHALL display a minimum of 6 sample post cards in a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile).
4. THE Blog_Page SHALL include a category filter bar allowing parents to filter posts by category (e.g., Parenting Tips, School News, Activities).
5. WHEN a category filter is selected, THE Blog_Page SHALL show only posts matching that category without a full page reload.
6. THE Blog_Post SHALL include JSON-LD `Article` Structured_Data with `headline`, `author`, `datePublished`, and `image` properties.
7. THE Blog_Page SHALL include a search input field; WHEN a parent types a query, THE Blog_Page SHALL filter visible post cards to those whose title or excerpt contains the query string.
8. THE Blog_Page SHALL be linked from the main navigation bar and the footer's Quick Links section.

---

### Requirement 2: Testimonials Page

**User Story:** As a parent, I want to see a dedicated page of verified parent reviews, so that I can feel confident about choosing Sanifort.

#### Acceptance Criteria

1. THE Platform SHALL include a `testimonials.html` page displaying all parent testimonials in a masonry or grid layout.
2. THE Testimonials_Page SHALL display a minimum of 12 testimonial cards, each containing: star rating (1–5), review text, parent name, child's age/program, and an avatar emoji or initials badge.
3. THE Testimonials_Page SHALL include an aggregate rating summary section showing overall average rating, total review count, and a star-breakdown bar chart (5-star to 1-star distribution).
4. THE Testimonials_Page SHALL include a "Share Your Experience" CTA button that opens the WhatsApp chat with a pre-filled message inviting the parent to share feedback.
5. THE Testimonials_Page SHALL include JSON-LD `AggregateRating` Structured_Data with `ratingValue`, `reviewCount`, and `bestRating` properties.
6. THE Testimonials_Page SHALL be linked from the main navigation bar and the footer.
7. WHEN the page loads, THE Testimonials_Page SHALL animate testimonial cards into view using the existing `.reveal` scroll-observer pattern from `js/main.js`.

---

### Requirement 3: Virtual Tour Section

**User Story:** As a parent, I want to take a virtual tour of the campus from my phone, so that I can evaluate the facilities before visiting in person.

#### Acceptance Criteria

1. THE Platform SHALL include a Virtual_Tour_Section on the `about.html` page, placed after the Facilities section.
2. THE Virtual_Tour_Section SHALL display a tabbed or card-based interface with at least 5 campus area cards: Classrooms, Play Area, Art Studio, Smart Lab, and Dining Area.
3. WHEN a parent clicks a campus area card, THE Virtual_Tour_Section SHALL display a full-width media panel showing either an embedded YouTube video or a styled placeholder with a descriptive caption and emoji illustration.
4. THE Virtual_Tour_Section SHALL include a "Book a Physical Visit" CTA button linking to `contact.html`.
5. IF a video embed fails to load, THEN THE Virtual_Tour_Section SHALL display a styled fallback panel with the campus area name, emoji, and a "Contact us for a live tour" message.
6. THE Virtual_Tour_Section SHALL be fully responsive: card tabs stack vertically on mobile (screen width ≤ 768px) and display horizontally on desktop.

---

### Requirement 4: Event Calendar

**User Story:** As a parent, I want to view upcoming school events in a calendar format, so that I can plan my schedule around school activities.

#### Acceptance Criteria

1. THE Platform SHALL include an `events.html` page with an interactive monthly Event_Calendar widget.
2. THE Event_Calendar SHALL display the current month by default, with navigation buttons to move to the previous and next months.
3. WHEN a date has one or more events, THE Event_Calendar SHALL visually mark that date with a colored dot or badge.
4. WHEN a parent clicks a marked date, THE Event_Calendar SHALL display an event detail panel below the calendar showing event name, time, description, and a "Remind Me via WhatsApp" button.
5. THE Event_Calendar SHALL include an upcoming events list below the calendar widget, showing the next 5 events in chronological order with date, title, and category badge.
6. THE Event_Calendar SHALL be pre-populated with at least 8 sample events covering the current academic year (e.g., Sports Day, Annual Day, Baisakhi, Independence Day, Parent-Teacher Meeting).
7. THE `events.html` page SHALL be linked from the main navigation bar (replacing or supplementing the existing "Contact" link) and from the Events Banner on `index.html`.
8. THE Event_Calendar SHALL be fully functional using vanilla JavaScript with no external calendar library dependencies.

---

### Requirement 5: Parent Dashboard (Future-Ready Wireframe)

**User Story:** As a parent, I want to see a preview of the upcoming parent portal, so that I understand the digital features planned for enrolled families.

#### Acceptance Criteria

1. THE Platform SHALL include a `dashboard.html` page presenting a high-fidelity wireframe of the planned Parent_Dashboard.
2. THE Parent_Dashboard wireframe SHALL include the following UI panels: Child Profile card, Attendance Summary, Fee Payment Status, Upcoming Events, Photo Gallery (recent), and Notifications feed.
3. THE Parent_Dashboard SHALL display a prominent "Coming Soon" banner with an estimated launch label and a "Register Interest" CTA linking to the WhatsApp number.
4. THE Parent_Dashboard SHALL use the existing Design_System (CSS variables, card styles, button classes) so it visually matches the rest of the Platform.
5. THE Parent_Dashboard SHALL be accessible via a "Parent Portal" link in the footer's Quick Links section.
6. ALL interactive elements on the Parent_Dashboard (buttons, tabs) SHALL be non-functional placeholders styled with `cursor: not-allowed` and a tooltip reading "Available after launch".

---

### Requirement 6: QR Code Entry System

**User Story:** As a school admin, I want to generate and display QR codes for child check-in/check-out, so that entry is contactless and secure.

#### Acceptance Criteria

1. THE Platform SHALL include a `qr-system.html` page demonstrating the QR_System concept with a child ID input field and a QR code display area.
2. WHEN an Admin enters a child ID (alphanumeric, 4–10 characters) and clicks "Generate QR", THE QR_System SHALL render a QR code image encoding the child's ID using a client-side QR library (e.g., `qrcode.js` via CDN).
3. THE QR_System page SHALL include a "Download QR" button; WHEN clicked, THE QR_System SHALL trigger a browser download of the QR code as a PNG file named `sanifort-qr-[childID].png`.
4. THE QR_System page SHALL include a "Print QR Card" button that opens the browser print dialog with a styled card layout showing the school logo, child ID, and QR code.
5. THE QR_System page SHALL display a usage instructions section explaining the check-in/check-out workflow in 3 steps with icons.
6. IF the child ID field is empty or contains fewer than 4 characters when "Generate QR" is clicked, THEN THE QR_System SHALL display an inline validation error message without generating a QR code.
7. THE `qr-system.html` page SHALL be linked from the footer under a new "School Tools" section.

---

### Requirement 7: SEO Structured Data

**User Story:** As the school owner, I want search engines to display rich results for Sanifort, so that parents searching "Best Preschool in Hanumangarh" find us prominently.

#### Acceptance Criteria

1. THE `index.html` page SHALL include a JSON-LD `EducationalOrganization` schema with `name`, `url`, `telephone`, `address` (with `addressLocality: "Hanumangarh"`, `addressRegion: "Rajasthan"`), `description`, and `sameAs` (social media URLs) properties.
2. THE `index.html` page SHALL include a JSON-LD `FAQPage` schema with at least 5 frequently asked questions and answers about admissions, programs, and fees.
3. THE `admissions.html` page SHALL include a JSON-LD `Course` schema for each of the 3 programs (Playgroup, Nursery, Kindergarten) with `name`, `description`, `provider`, and `educationalLevel` properties.
4. THE `index.html` page SHALL include Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) for social sharing.
5. THE `index.html` page SHALL include a `<link rel="canonical">` tag pointing to the page's canonical URL.
6. ALL pages SHALL include a `<meta name="robots" content="index, follow">` tag.
7. THE `index.html` page SHALL achieve a Lighthouse SEO score of 90 or above when audited (verified by the developer post-implementation).

---

### Requirement 8: Design System Refinements

**User Story:** As a developer, I want a consistent and documented design system, so that new pages and components match the existing premium aesthetic without guesswork.

#### Acceptance Criteria

1. THE `css/style.css` file SHALL include CSS custom properties for all new page components (Blog, Testimonials, Event Calendar, Dashboard, QR System) following the existing variable naming convention (`--r-*`, `--s-*`, `--t-*`).
2. THE Design_System SHALL define a `.page-section` utility class that applies consistent `padding: 90px 0` and can accept a `--section-bg` CSS variable for background color.
3. THE Design_System SHALL include a `.badge` component class for category/status tags with variants: `.badge-yellow`, `.badge-blue`, `.badge-green`, `.badge-pink`.
4. THE Design_System SHALL include a `.card-hover` utility class that applies the standard lift-and-shadow hover transition (`translateY(-8px)` + `var(--s3)`) reusable across all card types.
5. ALL new pages SHALL use the `Nunito` font for body text and `Fredoka One` for headings, consistent with the existing Design_System.
6. ALL new pages SHALL include the standard navbar, WhatsApp floating button, and footer components, matching the markup pattern used in existing pages.
7. THE Design_System SHALL define responsive breakpoints: mobile (≤ 480px), tablet (481px–768px), desktop (≥ 769px) — documented as CSS comments in `style.css`.
8. WHEN viewed on a mobile device (screen width ≤ 480px), ALL new page grids SHALL collapse to a single column layout.

---

### Requirement 9: Navigation & Sitemap Updates

**User Story:** As a parent, I want clear navigation to all sections of the platform, so that I can find information quickly without confusion.

#### Acceptance Criteria

1. THE Platform's main navigation SHALL include links to: Home, About, Programs, Admissions, Gallery, Blog, and Contact — a maximum of 7 items plus the "Enroll Now" CTA.
2. THE footer's Quick Links section SHALL include links to all main pages plus Testimonials and Events.
3. THE footer SHALL include a new "School Tools" section with links to Parent Portal (dashboard.html) and QR System (qr-system.html).
4. THE `index.html` Events Banner section's "View All Events" button SHALL link to `events.html`.
5. WHEN a parent is on any page, THE navbar SHALL highlight the active page link using the `.active` CSS class.
6. THE Platform SHALL include a `sitemap.xml` file listing all pages with `<loc>`, `<lastmod>`, and `<priority>` tags for search engine crawling.
