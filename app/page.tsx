"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  useEffect(() => {
    const cur = document.getElementById("cur");
    const nav = document.getElementById("nav");
    const trail = document.getElementById("cursor-trail");

    if (!cur || !nav || !trail) {
      return;
    }

    // Trail generation variables
    let trailCounter = 0;
    const maxTrailDots = 20;
    const trailDots: HTMLElement[] = [];

    const createTrailSegment = (x: number, y: number, size: number = 12) => {
      const segment = document.createElement("div");
      segment.className = "cursor-trail-segment";
      segment.style.left = `${x}px`;
      segment.style.top = `${y}px`;
      segment.style.width = `${size}px`;
      segment.style.height = `${size}px`;
      segment.style.transform = "translate(-50%, -50%)";
      trail.appendChild(segment);
      
      trailDots.push(segment);
      
      // Remove old segments if we have too many
      if (trailDots.length > maxTrailDots) {
        const oldSegment = trailDots.shift();
        if (oldSegment) {
          oldSegment.remove();
        }
      }
      
      // Remove segment after animation completes
      setTimeout(() => {
        segment.remove();
        const index = trailDots.indexOf(segment);
        if (index > -1) {
          trailDots.splice(index, 1);
        }
      }, 1500);
    };

    const onMouseMove = (e: MouseEvent) => {
      cur.style.left = `${e.clientX}px`;
      cur.style.top = `${e.clientY}px`;
      
      // Create continuous trail segments
      trailCounter++;
      if (trailCounter % 1 === 0) { // Create a segment every mouse move event for continuity
        const size = Math.random() * 4 + 8; // Random size between 8-12px for natural variation
        createTrailSegment(e.clientX, e.clientY, size);
      }
    };

    const hoverTargets = document.querySelectorAll("a,button,.srv,.plan,.why-card");
    const onEnter = () => cur.classList.add("big");
    const onLeave = () => cur.classList.remove("big");

    document.addEventListener("mousemove", onMouseMove);
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);

    const rvEls = document.querySelectorAll(".rv");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.12 },
    );
    rvEls.forEach((el) => obs.observe(el));

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cur"></div>
      <div id="cursor-trail"></div>

      <nav id="nav">
        <a href="#" className="nav-logo">vrevo<span className="dot">.</span></a>
        <ul className="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        <a href="#contact" className="nav-btn">start your project →</a>
      </nav>

      <section className="hero">
        <div className="hero-grid-bg"></div>
        {/* <div className="hero-badge"><span></span> born in bangalore. built for the world.</div> */}
        <h1 className="hero-title">
          <span className="hero-line">we build</span>
          <span className="hero-line"><span className="r">digital.</span></span>
          <span className="hero-line">you build</span>
          <span className="hero-line"><span className="l">empires.</span></span>
        </h1>
        <div className="hero-sub">
          {/* <p className="hero-desc">
            websites • apps • social media<br />
            for businesses that <strong>refuse to blend in.</strong><br /><br />
            no corporate fluff. no endless meetings.<br />
            just clean builds, sharp strategy, results.
          </p> */}
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">start your project</a>
            <a href="#services" className="btn-ghost">see our work →</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-bar"></div>
          scroll
        </div>
      </section>

      <div className="marquee">
        <div className="mtrack">
          <div className="mitem">webrev <span className="sep">✦</span></div>
          <div className="mitem">apprev <span className="sep">✦</span></div>
          <div className="mitem">socialrev <span className="sep">✦</span></div>
          <div className="mitem">brandrev <span className="sep">✦</span></div>
          <div className="mitem">growrev <span className="sep">✦</span></div>
          <div className="mitem">fullrev <span className="sep">✦</span></div>
          <div className="mitem">webrev <span className="sep">✦</span></div>
          <div className="mitem">apprev <span className="sep">✦</span></div>
          <div className="mitem">socialrev <span className="sep">✦</span></div>
          <div className="mitem">brandrev <span className="sep">✦</span></div>
          <div className="mitem">growrev <span className="sep">✦</span></div>
          <div className="mitem">fullrev <span className="sep">✦</span></div>
        </div>
      </div>

      <section className="about" id="about">
        <div className="rv">
          <div className="eyebrow">about vrevo.</div>
          <h2>not an agency.<br />not a freelancer.<br />your <em>digital co-founder.</em></h2>
        </div>
        <div className="rv about-right" style={{ transitionDelay: ".1s" }}>
          <p>vrevo. was born in bangalore with one belief — <strong>every business deserves a digital presence that hits different.</strong></p>
          <p>we build websites, apps, and social media strategies that don't just exist online. they dominate it. no corporate fluff. no endless meetings. just clean builds, sharp strategy, and results that actually matter.</p>
          <p>the dot at the end is intentional. it's a <strong>full stop on the old way of doing digital.</strong></p>
          <div className="about-tags">
            <span className="tag">bangalore-based</span>
            <span className="tag">globally capable</span>
            <span className="tag">no hidden costs</span>
            <span className="tag">ships fast</span>
            <span className="tag">results-focused</span>
            <span className="tag">your co-founder</span>
          </div>
        </div>
      </section>

      <section className="problem">
        <div className="problem-bg">?</div>
        <div className="eyebrow" style={{ color: "rgba(0,0,0,.4)" }}>the problem</div>
        <h2><span className="dim">most businesses</span><br />are invisible<br /><span className="dim">online.</span></h2>
        <p>bad websites. no app. dead social media. zero strategy. they're losing customers to competitors who just <strong>look better.</strong> vrevo. fixes all of it — under one roof, at a price that makes sense.</p>
      </section>

      <section className="services" id="services">
        <div className="section-head rv">
          <div>
            <div className="eyebrow">what we do</div>
            <h2>six ways we<br />build different.</h2>
          </div>
          <p>every service is designed to move the needle — not just look good on a slide deck.</p>
        </div>
        <div className="services-grid rv">
          <div className="service-card" onClick={() => setSelectedService('webrev')}>
            <div className="service-number">01</div>
            <div className="service-content">
              <h3 className="service-name">webrev</h3>
              <p className="service-tag">your site, but make it clean</p>
            </div>
            <div className="service-arrow">→</div>
          </div>
          <div className="service-card" onClick={() => setSelectedService('apprev')}>
            <div className="service-number">02</div>
            <div className="service-content">
              <h3 className="service-name">apprev</h3>
              <p className="service-tag">mobile-first, always</p>
            </div>
            <div className="service-arrow">→</div>
          </div>
          <div className="service-card" onClick={() => setSelectedService('socialrev')}>
            <div className="service-number">03</div>
            <div className="service-content">
              <h3 className="service-name">socialrev</h3>
              <p className="service-tag">content that actually converts</p>
            </div>
            <div className="service-arrow">→</div>
          </div>
          <div className="service-card" onClick={() => setSelectedService('brandrev')}>
            <div className="service-number">04</div>
            <div className="service-content">
              <h3 className="service-name">brandrev</h3>
              <p className="service-tag">look like you mean it</p>
            </div>
            <div className="service-arrow">→</div>
          </div>
          <div className="service-card" onClick={() => setSelectedService('growrev')}>
            <div className="service-number">05</div>
            <div className="service-content">
              <h3 className="service-name">growrev</h3>
              <p className="service-tag">get found. stay found.</p>
            </div>
            <div className="service-arrow">→</div>
          </div>
          <div className="service-card" onClick={() => setSelectedService('fullrev')}>
            <div className="service-number">06</div>
            <div className="service-content">
              <h3 className="service-name">fullrev</h3>
              <p className="service-tag">we handle everything. you just grow.</p>
            </div>
            <div className="service-arrow">→</div>
          </div>
        </div>
      </section>

      <section className="how-we-work">
        <div className="how-we-work-container">
          <div className="how-we-work-header rv">
            <div className="eyebrow">how we work</div>
          </div>
          <div className="process-timeline rv">
            <div className="timeline-item rv">
              <div className="timeline-marker">
                <div className="timeline-circle"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="step-content">
                <div className="step-number">01</div>
                <h3 className="step-title">brief</h3>
                <p className="step-desc">we listen to your vision and goals</p>
              </div>
            </div>
            <div className="timeline-item rv" style={{ transitionDelay: ".2s" }}>
              <div className="timeline-marker">
                <div className="timeline-circle"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="step-content">
                <div className="step-number">02</div>
                <h3 className="step-title">strategy</h3>
                <p className="step-desc">we plan the roadmap to success</p>
              </div>
            </div>
            <div className="timeline-item rv" style={{ transitionDelay: ".4s" }}>
              <div className="timeline-marker">
                <div className="timeline-circle"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="step-content">
                <div className="step-number">03</div>
                <h3 className="step-title">design</h3>
                <p className="step-desc">we craft visuals that convert</p>
              </div>
            </div>
            <div className="timeline-item rv" style={{ transitionDelay: ".6s" }}>
              <div className="timeline-marker">
                <div className="timeline-circle"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="step-content">
                <div className="step-number">04</div>
                <h3 className="step-title">build</h3>
                <p className="step-desc">we develop with precision</p>
              </div>
            </div>
            <div className="timeline-item rv" style={{ transitionDelay: ".8s" }}>
              <div className="timeline-marker">
                <div className="timeline-circle"></div>
              </div>
              <div className="step-content">
                <div className="step-number">05</div>
                <h3 className="step-title">launch</h3>
                <p className="step-desc">we deploy and support growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="section-head rv">
          <div>
            <div className="eyebrow">why vrevo.</div>
            <h2>five reasons.<br />no fluff.</h2>
          </div>
          <p>we've built this around what actually matters to businesses.</p>
        </div>
        <div className="why-grid rv">
          <div className="why-card"><div className="why-key">fast.</div><h3>we ship in weeks, not months.</h3><p>no bloated timelines, no excuse chains. we move fast, communicate clearly, and deliver on time.</p></div>
          <div className="why-card"><div className="why-key">clean.</div><h3>no bloated code. no ugly design.</h3><p>every pixel and every line of code is intentional. we build for performance and for people.</p></div>
          <div className="why-card"><div className="why-key">honest.</div><h3>transparent communication. no surprises.</h3><p>you know exactly what you're getting before we start. no hidden agendas, no unexpected changes.</p></div>
          <div className="why-card"><div className="why-key">local.</div><h3>bangalore-based. globally capable.</h3><p>we understand the indian market deeply while building products that compete on any stage.</p></div>
        </div>
      </section>

      <section className="comparison">
        <div className="section-head rv">
          <div>
            <div className="eyebrow">why vrevo</div>
            <h2>the comparison<br />that matters.</h2>
          </div>
          <p>see how we stack up against freelancers and agencies.</p>
        </div>
        <div className="comparison-table rv">
          <table>
            <thead>
              <tr>
                <th className="feature-header">feature</th>
                <th className="vrevo-header">vrevo</th>
                <th className="other-header">freelancer</th>
                <th className="other-header">agency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="comparison-row rv">
                <td className="feature-cell">dedicated team</td>
                <td className="vrevo-cell">✓</td>
                <td className="other-cell">✗</td>
                <td className="other-cell">✓</td>
              </tr>
              <tr className="comparison-row rv" style={{ transitionDelay: ".1s" }}>
                <td className="feature-cell">fixed timeline</td>
                <td className="vrevo-cell">✓</td>
                <td className="other-cell">✗</td>
                <td className="other-cell">✓</td>
              </tr>
              <tr className="comparison-row rv" style={{ transitionDelay: ".2s" }}>
                <td className="feature-cell">transparent process</td>
                <td className="vrevo-cell">✓</td>
                <td className="other-cell">✓</td>
                <td className="other-cell">✗</td>
              </tr>
              <tr className="comparison-row rv" style={{ transitionDelay: ".3s" }}>
                <td className="feature-cell">direct communication</td>
                <td className="vrevo-cell">✓</td>
                <td className="other-cell">✓</td>
                <td className="other-cell">✗</td>
              </tr>
              <tr className="comparison-row rv" style={{ transitionDelay: ".4s" }}>
                <td className="feature-cell">quality assurance</td>
                <td className="vrevo-cell">✓</td>
                <td className="other-cell">✗</td>
                <td className="other-cell">✓</td>
              </tr>
              <tr className="comparison-row rv" style={{ transitionDelay: ".5s" }}>
                <td className="feature-cell">post-launch support</td>
                <td className="vrevo-cell">✓</td>
                <td className="other-cell">✗</td>
                <td className="other-cell">✓</td>
              </tr>
              <tr className="comparison-row rv" style={{ transitionDelay: ".6s" }}>
                <td className="feature-cell">custom solutions</td>
                <td className="vrevo-cell">✓</td>
                <td className="other-cell">✗</td>
                <td className="other-cell">✓</td>
              </tr>
              <tr className="comparison-row rv" style={{ transitionDelay: ".7s" }}>
                <td className="feature-cell">avg delivery</td>
                <td className="vrevo-cell">2 weeks</td>
                <td className="other-cell">4+ weeks</td>
                <td className="other-cell">6+ weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band-bg">rev.</div>
        <h2>ready to<br />rev up?</h2>
        <a href="#contact">book a free call →</a>
      </section>

      <section className="contact" id="contact">
        <div className="rv">
          <div className="eyebrow">let&apos;s build</div>
          <h2>start your<br /><span className="r">project.</span></h2>
          <p>we&apos;re not an agency. we&apos;re your digital co-founder. let&apos;s build something that hits different.</p>
          <div className="contact-detail"><div className="c-icon">✉</div><div className="c-text">hello@vrevo.co</div></div>
          <div className="contact-detail"><div className="c-icon">🌐</div><div className="c-text">vrevo.co</div></div>
          <div className="contact-detail"><div className="c-icon">📍</div><div className="c-text">bangalore, karnataka, india</div></div>
          <div className="contact-detail"><div className="c-icon">@</div><div className="c-text">@vrevo</div></div>
        </div>
        <div className="rv" style={{ transitionDelay: ".1s" }}>
          <div className="form-row">
            <div className="fld"><label>your name</label><input type="text" placeholder="rahul sharma" /></div>
            <div className="fld"><label>company</label><input type="text" placeholder="your brand" /></div>
          </div>
          <div className="fld"><label>email</label><input type="email" placeholder="you@brand.com" /></div>
          <div className="fld">
            <label>what do you need?</label>
            <select>
              <option>webrev — website development</option>
              <option>apprev — app development</option>
              <option>socialrev — social media</option>
              <option>brandrev — branding & identity</option>
              <option>growrev — SEO & growth</option>
              <option>fullrev — everything</option>
            </select>
          </div>
          <div className="fld"><label>tell us about your project</label><textarea placeholder="what does your business do? what's the goal?"></textarea></div>
          <button className="submit-btn">send it. →</button>
        </div>
      </section>

      <footer>
        <div className="footer-logo">vrevo<span className="dot">.</span></div>
        <div className="footer-links">
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#contact">contact</a>
        </div>
        <div className="footer-copy">© 2025 vrevo. all rights reserved.</div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-1.135-1.012-1.897-2.226-2.07-2.52-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.149-.669-1.611-.916-1.916-.247-.305-.547-.365-.846-.365-.297 0-.644.074-.846.074-.203.074-.778.365-1.134.717-.357.353-.719.923-.719 1.792 0 .868.644 1.775 1.011 2.304.373.528 1.595 2.443 3.977 3.947 2.382 1.503 3.977 2.027 4.602 2.278.625.25 1.184.149 1.631-.073.447-.223 1.868-.865 2.165-1.012.297-.149.471-.371.471-.717 0-.347-.371-1.012-.446-1.164-.075-.153-.149-.298-.446-.447z" fill="currentColor"/>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.059 22 1 16.94 1 11S6.059 0 12 0s11 5.059 11 11-5.059 11-11 11z" fill="currentColor"/>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-1.135-1.012-1.897-2.226-2.07-2.52-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.149-.669-1.611-.916-1.916-.247-.305-.547-.365-.846-.365-.297 0-.644.074-.846.074-.203.074-.778.365-1.134.717-.357.353-.719.923-.719 1.792 0 .868.644 1.775 1.011 2.304.373.528 1.595 2.443 3.977 3.947 2.382 1.503 3.977 2.027 4.602 2.278.625.25 1.184.149 1.631-.073.447-.223 1.868-.865 2.165-1.012.297-.149.471-.371.471-.717 0-.347-.371-1.012-.446-1.164-.075-.153-.149-.298-.446-.447z" fill="currentColor"/>
        </svg>
        <span className="whatsapp-text">Chat with us</span>
      </a>

      {/* Service Popup Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>×</button>
            {selectedService === 'webrev' && (
              <>
                <h2 className="modal-title">webrev</h2>
                <p className="modal-subtitle">your site, but make it clean</p>
                <div className="modal-body">
                  <p>We build websites that don't just look good—they perform. Clean code, lightning-fast load times, and designs that convert visitors into customers.</p>
                  <ul className="modal-features">
                    <li>Responsive design that works on every device</li>
                    <li>SEO-optimized from day one</li>
                    <li>Blazing-fast performance</li>
                    <li>CMS integration for easy updates</li>
                    <li>Analytics and tracking setup</li>
                  </ul>
                  <a href="#contact" className="modal-btn" onClick={() => setSelectedService(null)}>start your project →</a>
                </div>
              </>
            )}
            {selectedService === 'apprev' && (
              <>
                <h2 className="modal-title">apprev</h2>
                <p className="modal-subtitle">mobile-first, always</p>
                <div className="modal-body">
                  <p>Native and cross-platform mobile apps that users love. Smooth interfaces, reliable performance, and seamless user experiences.</p>
                  <ul className="modal-features">
                    <li>iOS and Android development</li>
                    <li>React Native for cross-platform efficiency</li>
                    <li>App store deployment</li>
                    <li>Push notifications and analytics</li>
                    <li>Ongoing maintenance and updates</li>
                  </ul>
                  <a href="#contact" className="modal-btn" onClick={() => setSelectedService(null)}>start your project →</a>
                </div>
              </>
            )}
            {selectedService === 'socialrev' && (
              <>
                <h2 className="modal-title">socialrev</h2>
                <p className="modal-subtitle">content that actually converts</p>
                <div className="modal-body">
                  <p>Social media management that drives real business results. No fluff, just strategy that builds your brand and brings in customers.</p>
                  <ul className="modal-features">
                    <li>Content strategy and creation</li>
                    <li>Platform-specific optimization</li>
                    <li>Community management</li>
                    <li>Performance analytics</li>
                    <li>Influencer partnerships</li>
                  </ul>
                  <a href="#contact" className="modal-btn" onClick={() => setSelectedService(null)}>start your project →</a>
                </div>
              </>
            )}
            {selectedService === 'brandrev' && (
              <>
                <h2 className="modal-title">brandrev</h2>
                <p className="modal-subtitle">look like you mean it</p>
                <div className="modal-body">
                  <p>Complete brand identity that makes you unforgettable. From logos to guidelines, we build brands that stand out and stay consistent.</p>
                  <ul className="modal-features">
                    <li>Logo design and variation</li>
                    <li>Brand guidelines and style guide</li>
                    <li>Marketing collateral design</li>
                    <li>Brand voice and messaging</li>
                    <li>Competitive brand positioning</li>
                  </ul>
                  <a href="#contact" className="modal-btn" onClick={() => setSelectedService(null)}>start your project →</a>
                </div>
              </>
            )}
            {selectedService === 'growrev' && (
              <>
                <h2 className="modal-title">growrev</h2>
                <p className="modal-subtitle">get found. stay found.</p>
                <div className="modal-body">
                  <p>SEO and growth strategies that put you on the map. We get you found by the right people and keep you there.</p>
                  <ul className="modal-features">
                    <li>Comprehensive SEO audit</li>
                    <li>Keyword research and optimization</li>
                    <li>Content marketing strategy</li>
                    <li>Local SEO optimization</li>
                    <li>Monthly performance reports</li>
                  </ul>
                  <a href="#contact" className="modal-btn" onClick={() => setSelectedService(null)}>start your project →</a>
                </div>
              </>
            )}
            {selectedService === 'fullrev' && (
              <>
                <h2 className="modal-title">fullrev</h2>
                <p className="modal-subtitle">we handle everything. you just grow.</p>
                <div className="modal-body">
                  <p>The complete digital solution. From website to apps to marketing, we handle it all so you can focus on running your business.</p>
                  <ul className="modal-features">
                    <li>Everything from webrev, apprev, socialrev, brandrev, and growrev</li>
                    <li>Dedicated account manager</li>
                    <li>Priority support</li>
                    <li>Monthly strategy sessions</li>
                    <li>Custom reporting dashboard</li>
                  </ul>
                  <a href="#contact" className="modal-btn" onClick={() => setSelectedService(null)}>start your project →</a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
