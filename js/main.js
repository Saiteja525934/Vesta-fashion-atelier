/**
 * VESTA — Luxury Fashion Storefront
 * Vanilla JavaScript interactions (Cart Drawer, Filter Tabs, PDP Gallery, Tabs, Quantity)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Slide-In Cart Drawer
  const cartTriggers = document.querySelectorAll('.js-cart-trigger');
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  const cartCloseBtn = document.querySelector('.js-cart-close');

  const openCart = () => {
    document.body.classList.add('cart-open');
  };

  const closeCart = () => {
    document.body.classList.remove('cart-open');
  };

  cartTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  }));

  cartCloseBtn?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  // 3. Mobile Navigation Menu
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav-overlay');

  mobileToggle?.addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav-open');
  });

  // 4. Instant Category Filter Tabs (Homepage / Shop)
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedCategory = tab.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCat === selectedCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Quantity Steppers
  document.querySelectorAll('.quantity-stepper, .pdp-stepper').forEach(stepper => {
    const decBtn = stepper.querySelector('.stepper-btn.decrease');
    const incBtn = stepper.querySelector('.stepper-btn.increase');
    const valElem = stepper.querySelector('.stepper-value');

    decBtn?.addEventListener('click', () => {
      let currentVal = parseInt(valElem.textContent, 10);
      if (currentVal > 1) {
        valElem.textContent = currentVal - 1;
      }
    });

    incBtn?.addEventListener('click', () => {
      let currentVal = parseInt(valElem.textContent, 10);
      valElem.textContent = currentVal + 1;
    });
  });

  // 6. PDP Image Thumbnail Swap
  const pdpThumbs = document.querySelectorAll('.pdp-thumb-btn');
  const pdpMainImage = document.querySelector('.pdp-main-image-frame img');

  pdpThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      pdpThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const targetSrc = thumb.querySelector('img')?.getAttribute('src');
      if (targetSrc && pdpMainImage) {
        pdpMainImage.style.opacity = '0.4';
        setTimeout(() => {
          pdpMainImage.setAttribute('src', targetSrc);
          pdpMainImage.style.opacity = '1';
        }, 150);
      }
    });
  });

  // 7. PDP Size Chips Selection
  const sizeChips = document.querySelectorAll('.size-chip-btn:not(.disabled)');
  sizeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sizeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // 8. PDP Color Swatches Selection
  const pdpSwatches = document.querySelectorAll('.pdp-swatch-btn');
  const selectedColorLabel = document.querySelector('.js-selected-color');
  pdpSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      pdpSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      const colorName = swatch.getAttribute('data-color-name');
      if (selectedColorLabel && colorName) {
        selectedColorLabel.textContent = colorName;
      }
    });
  });

  // 9. PDP Accordion Tabs
  const tabHeaders = document.querySelectorAll('.pdp-tab-header');
  tabHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.pdp-tab-item');
      item?.classList.toggle('active');
    });
  });

  // 10. Quick Add To Bag Simulation
  const quickAddBtns = document.querySelectorAll('.product-quick-add, .pdp-add-btn');
  const cartBadge = document.querySelector('.cart-count-badge');
  const cartCountText = document.querySelector('.drawer-title span.count');

  quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      let count = parseInt(cartBadge.textContent || '2', 10);
      count += 1;
      cartBadge.textContent = count;
      if (cartCountText) cartCountText.textContent = `(${count} items)`;

      // Flash feedback
      const originalText = btn.textContent;
      btn.textContent = 'Added to Bag ✓';
      btn.style.backgroundColor = 'var(--color-success)';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
        openCart();
      }, 700);
    });
  });

  // 11. Wishlist Heart Toggle
  const wishlistBtns = document.querySelectorAll('.product-wishlist-btn, .pdp-wishlist-btn');
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('active');
      const svg = btn.querySelector('svg');
      if (btn.classList.contains('active')) {
        svg?.setAttribute('fill', 'currentColor');
      } else {
        svg?.setAttribute('fill', 'none');
      }
    });
  });
});
