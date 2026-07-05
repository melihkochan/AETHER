"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  ImageIcon,
  Info,
  LogOut,
  MoreHorizontal,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/layout/page-header";
import { Divider } from "@/components/layout/divider";

import { Heading } from "@/components/typography/heading";
import { Subheading } from "@/components/typography/subheading";
import { Paragraph } from "@/components/typography/paragraph";
import { Caption } from "@/components/typography/caption";
import { Muted } from "@/components/typography/muted";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { LoadingButton } from "@/components/ui/loading-button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { InteractiveCard } from "@/components/ui/interactive-card";

import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/ui/status-badge";
import { CategoryBadge } from "@/components/ui/category-badge";
import { RoleBadge } from "@/components/ui/role-badge";

import { Input } from "@/components/forms/input";
import { Textarea } from "@/components/forms/textarea";
import { SearchInput } from "@/components/forms/search-input";

import { LoadingSpinner } from "@/components/feedback/loading-spinner";
import { SkeletonLoader } from "@/components/feedback/skeleton-loader";
import { EmptyState } from "@/components/feedback/empty-state";
import { toast } from "@/components/feedback/toast";

import { Modal } from "@/components/overlay/modal";
import { Dropdown } from "@/components/overlay/dropdown";
import { Tooltip } from "@/components/overlay/tooltip";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

import { Icon } from "@/components/shared/icon";
import { fadeIn, fadeUp, scaleIn, slideUp } from "@/lib/animations/variants";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2 pb-8">
      <Caption>{eyebrow}</Caption>
      <Subheading as="h2">{title}</Subheading>
    </div>
  );
}

export function DesignSystemPlayground() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container>
      <Section spacing="sm" className="pt-8">
        <PageHeader
          title="Design System"
          description="Internal reference for every reusable primitive in the AETHER ecosystem — website, dashboard, admin panel, and future NUI apps all draw from this one surface."
        />
      </Section>

      {/* Typography */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Typography" title="Type scale" />
        <div className="flex flex-col gap-6">
          <Heading>Heading</Heading>
          <Subheading>Subheading</Subheading>
          <Paragraph>
            Paragraph — the default body copy used across long-form content
            like the wiki, dev blog, and rules pages. Generous line height,
            soft contrast against the background.
          </Paragraph>
          <Caption>Caption label</Caption>
          <Muted>Muted — secondary, de-emphasized text.</Muted>
        </div>
      </Section>

      <Divider />

      {/* Layout */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Layout" title="Container, Section, Divider" />
        <Muted>
          This entire page is built with Container + Section + PageHeader +
          Divider. There is no separate demo — you are looking at the
          components in use right now.
        </Muted>
      </Section>

      <Divider />

      {/* Buttons */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Buttons" title="Actions" />
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <IconButton icon={Settings} label="Settings" />
          <LoadingButton
            isLoading={isLoading}
            loadingText="Saving…"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 1500);
            }}
          >
            Save changes
          </LoadingButton>
        </div>
      </Section>

      <Divider />

      {/* Cards */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Cards" title="Surfaces" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>
                Standard surface for grouped content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Muted>Used across dashboards and panels.</Muted>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline">
                Action
              </Button>
            </CardFooter>
          </Card>

          <GlassCard>
            <CardHeader>
              <CardTitle>Glass Card</CardTitle>
              <CardDescription>
                Translucent surface for overlays and hero panels.
              </CardDescription>
            </CardHeader>
          </GlassCard>

          <FeatureCard
            icon={Zap}
            title="Feature Card"
            description="Icon + title + description, used in feature grids."
          />

          <InteractiveCard href="/design-system">
            <CardTitle className="mb-1.5">Interactive Card</CardTitle>
            <CardDescription>Hover to see the lift animation.</CardDescription>
          </InteractiveCard>
        </div>
      </Section>

      <Divider />

      {/* Badges */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Badges" title="Labels" />
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status="online" />
          <StatusBadge status="pending" />
          <StatusBadge status="busy" />
          <StatusBadge status="offline" />
          <CategoryBadge>Roleplay</CategoryBadge>
          <CategoryBadge>Event</CategoryBadge>
          <RoleBadge role="owner" />
          <RoleBadge role="admin" />
          <RoleBadge role="staff" />
          <RoleBadge role="moderator" />
          <RoleBadge role="member" />
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      <Divider />

      {/* Inputs */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Inputs" title="Forms" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Caption>Input</Caption>
            <Input placeholder="you@aether.gg" />
          </div>
          <div className="flex flex-col gap-2">
            <Caption>Textarea</Caption>
            <Textarea placeholder="Tell us about your character…" />
          </div>
          <div className="flex flex-col gap-2">
            <Caption>Search Input</Caption>
            <SearchInput
              placeholder="Search the wiki…"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              onClear={() => setSearchValue("")}
            />
          </div>
        </div>
      </Section>

      <Divider />

      {/* Feedback */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Feedback" title="States" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-6">
            <LoadingSpinner size="sm" />
            <LoadingSpinner size="md" />
            <LoadingSpinner size="lg" />
            <Button
              variant="outline"
              onClick={() =>
                toast("Character saved", {
                  description: "Your changes have been synced.",
                })
              }
            >
              Trigger toast
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <SkeletonLoader variant="text" />
            <SkeletonLoader variant="avatar" />
            <SkeletonLoader variant="card" />
          </div>

          <Card>
            <EmptyState
              icon={ImageIcon}
              title="No screenshots yet"
              description="Screenshots shared in the community will appear here."
              action={
                <Button size="sm" variant="outline">
                  Upload
                </Button>
              }
            />
          </Card>
        </div>
      </Section>

      <Divider />

      {/* Overlay */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Overlay" title="Modal, Dropdown, Tooltip" />
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" onClick={() => setModalOpen(true)}>
            Open modal
          </Button>

          <Dropdown
            trigger={
              <Button variant="ghost">
                <MoreHorizontal className="size-4" aria-hidden="true" />
                Menu
              </Button>
            }
            items={[
              { label: "Profile", icon: Users },
              { label: "Notifications", icon: Bell },
              { type: "separator" },
              {
                label: "Sign out",
                icon: LogOut,
                variant: "destructive",
              },
            ]}
          />

          <Tooltip content="Keyboard accessible tooltip">
            <IconButton icon={Info} label="More info" variant="outline" />
          </Tooltip>
        </div>

        <Modal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title="Confirm action"
          description="This is the shared Modal primitive — built on the Dialog overlay."
          footer={
            <>
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)}>Confirm</Button>
            </>
          }
        >
          <Muted>
            Anything can go here — forms, lists, confirmations.
          </Muted>
        </Modal>
      </Section>

      <Divider />

      {/* Avatar */}
      <Section spacing="sm">
        <SectionHeading eyebrow="Avatar" title="Identity" />
        <div className="flex flex-wrap items-center gap-8">
          <Avatar>
            <AvatarImage src="" alt="" />
            <AvatarFallback>AE</AvatarFallback>
            <AvatarBadge>
              <ShieldCheck className="size-2" aria-hidden="true" />
            </AvatarBadge>
          </Avatar>

          <AvatarGroup>
            <Avatar>
              <AvatarFallback>AE</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>KV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+5</AvatarGroupCount>
          </AvatarGroup>
        </div>
      </Section>

      <Divider />

      {/* Animations */}
      <Section spacing="sm" className="pb-24">
        <SectionHeading eyebrow="Animations" title="Motion presets" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { name: "fadeIn", variants: fadeIn },
            { name: "fadeUp", variants: fadeUp },
            { name: "scaleIn", variants: scaleIn },
            { name: "slideUp", variants: slideUp },
          ].map(({ name, variants }) => (
            <motion.div
              key={name}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card"
            >
              <Icon icon={Sparkles} size="sm" className="text-accent" />
              <Caption>{name}</Caption>
            </motion.div>
          ))}
        </div>
        <Muted className="mt-4">
          Scroll this section back into view to replay the presets — each one
          lives in <code className="text-foreground">lib/animations/variants.ts</code>.
        </Muted>
      </Section>
    </Container>
  );
}
