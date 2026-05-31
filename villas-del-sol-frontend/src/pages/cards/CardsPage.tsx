import {
  useMemo,
  useState,
} from "react";

import MainLayout from "../../components/layout/MainLayout";

import CardsStats from "../../components/cards/CardsStats";

import CardsFilters from "../../components/cards/CardsFilters";

import CardsTable from "../../components/cards/CardsTable";

import CardIssueWizard from "../../components/cards/CardIssueWizard";

import CardDetailsDrawer from "../../components/cards/CardDetailsDrawer";

import type {
  Card,
} from "../../types/card";

import {
  mockCards,
} from "../../utils/mockCards";

export default function CardsPage() {
  const [search, setSearch] =
    useState("");

  const [
    issueWizardOpen,
    setIssueWizardOpen,
  ] = useState(false);

  const [
    selectedCard,
    setSelectedCard,
  ] = useState<Card | null>(
    null
  );

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const filteredCards =
    useMemo(() => {
      return mockCards.filter(
        (card) =>
          card.residentName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          card.cardNumber
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          card.rfidCode
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [search]);

  function handleCardClick(
    card: Card
  ) {
    setSelectedCard(card);

    setDetailsOpen(true);
  }

  return (
    <MainLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Gestión de Carnets
          </h1>

          <p className="text-slate-400 mt-2">
            Administración de carnets RFID peatonales y vehiculares.
          </p>
        </div>

        <CardsStats />

        <CardsFilters
          search={search}
          onSearchChange={
            setSearch
          }
          onIssueCard={() =>
            setIssueWizardOpen(
              true
            )
          }
        />

        <CardsTable
          cards={
            filteredCards
          }
          onSelectCard={
            handleCardClick
          }
        />

        <CardIssueWizard
          open={
            issueWizardOpen
          }
          onClose={() =>
            setIssueWizardOpen(
              false
            )
          }
        />

        <CardDetailsDrawer
          card={selectedCard}
          open={detailsOpen}
          onClose={() =>
            setDetailsOpen(
              false
            )
          }
        />

      </div>
    </MainLayout>
  );
}