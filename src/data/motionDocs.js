function buildMotionSnippets({ title, html, react, angular, vue }) {
  return {
    html: {
      title,
      language: 'html',
      filename: `${title.toLowerCase().replace(/\s+/g, '-')}.html`,
      code: html
    },
    react: {
      title,
      language: 'jsx',
      filename: `${title.replace(/\s+/g, '')}Example.jsx`,
      code: react
    },
    angular: {
      title,
      language: 'ts',
      filename: `${title.toLowerCase().replace(/\s+/g, '-')}.component.ts`,
      code: angular
    },
    vue: {
      title,
      language: 'vue',
      filename: `${title.replace(/\s+/g, '')}Example.vue`,
      code: vue
    }
  };
}

export const motionDocSections = [
  {
    id: 'gsap-integration-overview',
    title: 'GSAP Integration Overview',
    description:
      'Pixorix includes motion guidance because some interface moments benefit from more control than CSS transitions alone. GSAP is used as a progressive enhancement layer for docs demos and advanced production surfaces.',
    demoDescription:
      'Keep GSAP scoped to components or sections that genuinely benefit from orchestration, sequencing, or interruptible animation.',
    previewDescription:
      'This overview section keeps the preview simple and focuses on how GSAP slots into the system without dominating it.',
    previewText:
      'GSAP should enhance reveal timing, sequencing, and interaction polish while leaving the underlying HTML and CSS system framework-agnostic.',
    snippets: buildMotionSnippets({
      title: 'GSAP Integration Overview',
      html: `import { gsap } from 'gsap';

const cards = document.querySelectorAll('[data-reveal]');

gsap.fromTo(
  cards,
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`,
      react: `import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function MotionExample() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-reveal]',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return <section ref={rootRef}>...</section>;
}`,
      angular: `import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-motion-example',
  template: '<section><div data-reveal>...</div></section>'
})
export class MotionExampleComponent implements AfterViewInit {
  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    gsap.fromTo(
      this.host.nativeElement.querySelectorAll('[data-reveal]'),
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
    );
  }
}`,
      vue: `<script setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const rootRef = ref(null);

onMounted(() => {
  gsap.fromTo(
    rootRef.value.querySelectorAll('[data-reveal]'),
    { y: 18, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
  );
});
</script>

<template>
  <section ref="rootRef">...</section>
</template>`
    })
  },
  {
    id: 'why-motion-is-included',
    title: 'Why Motion Is Included',
    description:
      'Motion helps clarify hierarchy, reinforce intent, and make interactive surfaces feel more refined. Pixorix includes it because modern framework sites benefit from controlled transitions, not because every surface should animate by default.',
    demoDescription:
      'Use motion to explain layout changes, confirm interaction, or soften content entrance, not to decorate the page indiscriminately.',
    previewDescription:
      'This section frames motion as a product and docs affordance rather than a branding gimmick.',
    previewText:
      'Good motion should make interfaces easier to parse: reveal what changed, guide the eye, and add confidence to actions without slowing the user down.',
    snippets: buildMotionSnippets({
      title: 'Why Motion Is Included',
      html: `.px-surface {
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    opacity 240ms ease;
}`,
      react: `const motionPrinciples = [
  'Explain hierarchy',
  'Support interaction feedback',
  'Respect reduced motion'
];`,
      angular: `export const motionPrinciples = [
  'Explain hierarchy',
  'Support interaction feedback',
  'Respect reduced motion'
];`,
      vue: `<script setup>
const motionPrinciples = [
  'Explain hierarchy',
  'Support interaction feedback',
  'Respect reduced motion'
];
</script>`
    })
  },
  {
    id: 'motion-presets',
    title: 'Motion Presets',
    description:
      'Pixorix motion presets should be small, reusable patterns like reveal, lift, fade, and stagger. They provide consistency across docs and products without forcing teams into a large animation abstraction layer.',
    demoDescription:
      'A reveal preset is a good baseline because it works for docs sections, cards, grids, and feature rows.',
    previewDescription:
      'This preview uses a staggered reveal sequence with modest distance and timing values.',
    preview: { type: 'reveal' },
    snippets: buildMotionSnippets({
      title: 'Motion Presets',
      html: `gsap.fromTo(
  '[data-preset="reveal"]',
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`,
      react: `gsap.fromTo(
  '[data-preset="reveal"]',
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`,
      angular: `gsap.fromTo(
  this.host.nativeElement.querySelectorAll('[data-preset="reveal"]'),
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`,
      vue: `gsap.fromTo(
  rootRef.value.querySelectorAll('[data-preset="reveal"]'),
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`
    })
  },
  {
    id: 'reduced-motion-support',
    title: 'Reduced Motion Support',
    description:
      'Reduced motion support is a non-negotiable part of the motion layer. When users request less motion, Pixorix should either remove animation entirely or reduce it to near-static opacity or instant state changes.',
    demoDescription:
      'The docs examples use a media query check and skip GSAP timelines when reduced motion is enabled.',
    previewDescription:
      'The preview here focuses on the implementation rule: motion should disable cleanly instead of partially breaking the UI.',
    previewText:
      'When reduced motion is active, keep state changes immediate or nearly immediate. Do not leave elements offset, transparent, or waiting for an animation that never runs.',
    note: {
      tone: 'warning',
      title: 'Reduced motion rule',
      body:
        'Always set the final visual state before or while skipping animation so content remains visible and usable for people who prefer reduced motion.'
    },
    snippets: buildMotionSnippets({
      title: 'Reduced Motion Support',
      html: `const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  gsap.fromTo('.px-section', { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
}`,
      react: `const prefersReducedMotion = usePrefersReducedMotion();

useEffect(() => {
  if (prefersReducedMotion) {
    return;
  }

  gsap.fromTo('.px-section', { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
}, [prefersReducedMotion]);`,
      angular: `const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  gsap.fromTo('.px-section', { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
}`,
      vue: `const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  gsap.fromTo('.px-section', { y: 20, opacity: 0 }, { y: 0, opacity: 1 });
}`
    })
  },
  {
    id: 'reveal-animation',
    title: 'Reveal Animation',
    description:
      'Reveal animation is useful for sections, cards, and content groups entering the viewport or mounting into place. Keep the offset small and the easing calm so the content still feels immediate.',
    demoDescription:
      'This example demonstrates a simple reveal preset that works well for docs blocks and marketing modules.',
    previewDescription:
      'Three stacked surfaces enter with a short stagger and restrained vertical movement.',
    preview: { type: 'reveal' },
    snippets: buildMotionSnippets({
      title: 'Reveal Animation',
      html: `gsap.fromTo(
  '[data-reveal]',
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`,
      react: `gsap.fromTo(
  rootRef.current.querySelectorAll('[data-reveal]'),
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`,
      angular: `gsap.fromTo(
  this.host.nativeElement.querySelectorAll('[data-reveal]'),
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`,
      vue: `gsap.fromTo(
  rootRef.value.querySelectorAll('[data-reveal]'),
  { y: 18, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
);`
    })
  },
  {
    id: 'card-hover-motion',
    title: 'Card Hover Motion',
    description:
      'Card hover motion should signal interactivity, not simulate dramatic 3D movement. A small lift, shadow shift, or opacity transition is usually enough.',
    demoDescription:
      'This example uses a short hover tween to reinforce clickability without causing layout jitter.',
    previewDescription:
      'Hover or focus the cards to see a subtle elevation change.',
    preview: { type: 'card-hover' },
    snippets: buildMotionSnippets({
      title: 'Card Hover Motion',
      html: `card.addEventListener('mouseenter', () => {
  gsap.to(card, { y: -6, scale: 1.01, duration: 0.2, ease: 'power2.out' });
});

card.addEventListener('mouseleave', () => {
  gsap.to(card, { y: 0, scale: 1, duration: 0.2, ease: 'power2.out' });
});`,
      react: `const handleHover = (element, active) => {
  gsap.to(element, {
    y: active ? -6 : 0,
    scale: active ? 1.01 : 1,
    duration: 0.2,
    ease: 'power2.out'
  });
};`,
      angular: `hoverCard(card: HTMLElement, active: boolean) {
  gsap.to(card, {
    y: active ? -6 : 0,
    scale: active ? 1.01 : 1,
    duration: 0.2,
    ease: 'power2.out'
  });
}`,
      vue: `function hoverCard(element, active) {
  gsap.to(element, {
    y: active ? -6 : 0,
    scale: active ? 1.01 : 1,
    duration: 0.2,
    ease: 'power2.out'
  });
}`
    })
  },
  {
    id: 'button-microinteraction',
    title: 'Button Microinteraction',
    description:
      'Buttons can benefit from a small press or release response, especially on primary actions. Keep the interaction tight and brief so it reinforces responsiveness instead of slowing down the click.',
    demoDescription:
      'This example uses a small press animation on pointer down and releases immediately when interaction ends.',
    previewDescription:
      'Press the button to see a restrained scale and offset response.',
    preview: { type: 'button-microinteraction' },
    snippets: buildMotionSnippets({
      title: 'Button Microinteraction',
      html: `button.addEventListener('pointerdown', () => {
  gsap.to(button, { y: 2, scale: 0.985, duration: 0.16, ease: 'power2.out' });
});

button.addEventListener('pointerup', () => {
  gsap.to(button, { y: 0, scale: 1, duration: 0.16, ease: 'power2.out' });
});`,
      react: `const animateButton = (element, active) => {
  gsap.to(element, {
    y: active ? 2 : 0,
    scale: active ? 0.985 : 1,
    duration: 0.16,
    ease: 'power2.out'
  });
};`,
      angular: `pressButton(button: HTMLElement, active: boolean) {
  gsap.to(button, {
    y: active ? 2 : 0,
    scale: active ? 0.985 : 1,
    duration: 0.16,
    ease: 'power2.out'
  });
}`,
      vue: `function pressButton(element, active) {
  gsap.to(element, {
    y: active ? 2 : 0,
    scale: active ? 0.985 : 1,
    duration: 0.16,
    ease: 'power2.out'
  });
}`
    })
  },
  {
    id: 'section-entrance-motion',
    title: 'Section Entrance Motion',
    description:
      'Section entrance motion works well for larger content regions such as feature panels, dashboard surfaces, or documentation sections loaded into view. The timing should remain calm and readable.',
    demoDescription:
      'This example uses a slightly larger offset than the basic reveal pattern to introduce full section blocks.',
    previewDescription:
      'Three section-sized blocks enter with a soft scale and opacity transition.',
    preview: { type: 'section-entrance' },
    snippets: buildMotionSnippets({
      title: 'Section Entrance Motion',
      html: `gsap.fromTo(
  '.px-section-block',
  { y: 24, opacity: 0, scale: 0.98 },
  { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 }
);`,
      react: `gsap.fromTo(
  rootRef.current.querySelectorAll('.px-section-block'),
  { y: 24, opacity: 0, scale: 0.98 },
  { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 }
);`,
      angular: `gsap.fromTo(
  this.host.nativeElement.querySelectorAll('.px-section-block'),
  { y: 24, opacity: 0, scale: 0.98 },
  { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 }
);`,
      vue: `gsap.fromTo(
  rootRef.value.querySelectorAll('.px-section-block'),
  { y: 24, opacity: 0, scale: 0.98 },
  { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 }
);`
    })
  },
  {
    id: 'safe-and-elegant-usage',
    title: 'Safe And Elegant Usage Examples',
    description:
      'The safest motion usage is small in distance, short in duration, easy to interrupt, and always compatible with keyboard, touch, and reduced-motion preferences. Motion should support clarity first and personality second.',
    demoDescription:
      'A good rule of thumb is to keep transition ranges modest and reuse the same few patterns repeatedly.',
    previewDescription:
      'This section summarizes the tone of Pixorix motion rather than introducing another separate effect.',
    previewText:
      "Prefer reveal, lift, and press patterns over dramatic parallax, long auto-playing sequences, or motion that reorders the user's focus unexpectedly.",
    note: {
      tone: 'tip',
      title: 'Usage guidance',
      body:
        'If an animation makes the interface feel slower, harder to scan, or harder to control with keyboard and touch, it is outside the intended Pixorix motion style.'
    },
    snippets: buildMotionSnippets({
      title: 'Safe And Elegant Usage',
      html: `const motionPreset = {
  y: 18,
  duration: 0.55,
  ease: 'power2.out'
};`,
      react: `const motionPreset = {
  y: 18,
  duration: 0.55,
  ease: 'power2.out'
};`,
      angular: `export const motionPreset = {
  y: 18,
  duration: 0.55,
  ease: 'power2.out'
};`,
      vue: `<script setup>
const motionPreset = {
  y: 18,
  duration: 0.55,
  ease: 'power2.out'
};
</script>`
    })
  }
];
