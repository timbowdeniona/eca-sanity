"use client";

import { useEffect, useState } from "react";
import { SearchInput } from "@/components/storybook/search-input";
import { Dropdown } from "@/components/storybook/dropdown";
import { Pagination } from "@/components/storybook/pagination";
import { cn } from "@/utils/helpers/cn";
import { SanityClub } from "@/sanity/schema/information/club";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../storybook/button";
import { ResetIcon } from "@sanity/icons";
import { AlphabetTabs } from "../storybook/alphabet-tabs";

interface ClubSearchProps {
  clubs: SanityClub[];
  title?: string;
  className?: string;
}

export const ClubSearch = ({
  className,
  clubs,
  title = "ECA MEMBERS",
}: ClubSearchProps) => {
  const [filteredClubs, setFilteredClubs] = useState<SanityClub[]>(clubs);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [memberType, setMemberType] = useState<string>("");

  const itemsPerPage = 10;

  // Get unique countries for dropdown
  const countries = Array.from(new Set(clubs.map(club => club.country))).sort();

  // Get active letters for alphabet tabs
  const activeLetters = Array.from(
    new Set(clubs.map(club => club.club.charAt(0).toUpperCase())),
  ).sort();

  const memberTypes = Array.from(
    new Set(clubs.map(club => club.memberType)),
  ).sort();

  // Filter clubs based on search criteria
  useEffect(() => {
    let results = [...clubs];

    if (searchTerm) {
      results = results.filter(club =>
        club.club.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedCountry) {
      results = results.filter(club => club.country === selectedCountry);
    }

    if (selectedLetter) {
      results = results.filter(
        club => club.club.charAt(0).toUpperCase() === selectedLetter,
      );
    }

    if (memberType) {
      results = results.filter(club => club.memberType === memberType);
    }

    setFilteredClubs(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [clubs, searchTerm, selectedCountry, selectedLetter, memberType]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredClubs.length / itemsPerPage);
  const currentClubs = filteredClubs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Create pagination items
  const paginationItems = Array.from({ length: totalPages }, (_, i) => ({
    value: i + 1,
    label: String(i + 1),
  }));

  // Handle search input change
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  // Handle country selection
  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  // Handle member type selection
  const handleMemberTypeChange = (value: string) => {
    setMemberType(value);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle reset
  const handleReset = () => {
    setSearchTerm("");
    setSelectedCountry("");
    setSelectedLetter("");
    setMemberType("");
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="bg-grey py-6 md:py-8 lg:py-12">
        <div className="wrapper">
          <h1 className="mb-4 text-4xl font-bold">{title}</h1>
          <p className="mb-8">
            Find out which clubs are ECA Members in the current 2024/25 season.
          </p>

          <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-end">
            <div className="grow">
              <SearchInput
                hasClearIcon
                onChangeEvent={handleSearch}
                placeholder="Search ECA Members"
                value={searchTerm}
              />
            </div>

            <div className="flex flex-row justify-around gap-2">
              <Dropdown
                className="w-full"
                onChangeEvent={handleCountryChange}
                options={countries.map(country => ({
                  label: country,
                  value: country,
                }))}
                placeholder="Select a country"
                value={selectedCountry}
              />

              <Dropdown
                className="w-full"
                onChangeEvent={handleMemberTypeChange}
                options={memberTypes}
                placeholder="Select a member type"
                value={memberType}
              />
            </div>

            <Button
              className="flex items-center gap-1 bg-cyan-700 font-medium text-white hover:border-cyan-800 hover:bg-cyan-800 hover:text-white"
              onClick={handleReset}
              variant="icon"
            >
              <ResetIcon height={24} width={24} />
              Reset
            </Button>
          </div>

          <AlphabetTabs
            activeLetters={activeLetters}
            onLetterSelect={setSelectedLetter}
            selectedLetter={selectedLetter}
          />

          <div className="bg-white">
            <div className="grid grid-cols-4 bg-cyan-700 font-medium text-white">
              <div className="p-4">Club</div>
              <div className="p-4">Country</div>
              <div className="p-4">Member Type</div>
              <div className="p-4">Website</div>
            </div>

            {currentClubs.map((club, index) => (
              <div
                className={cn(
                  "grid grid-cols-4 border-b border-gray-200",
                  index % 2 === 1 ? "bg-gray-50" : "bg-white",
                )}
                key={club._id}
              >
                <div className="flex items-center p-4">
                  {club.logo && (
                    <div className="mr-3 size-10 shrink-0">
                      <Image
                        alt={`${club.club} logo`}
                        className="size-full object-contain"
                        height={40}
                        src={club?.logo?.asset?.url ?? ""}
                        width={40}
                      />
                    </div>
                  )}
                  <Link
                    aria-label={club.club}
                    href={"./eca-members/" + club._id}
                    title={club.club}
                  >
                    {club.club}
                  </Link>
                </div>
                <div className="flex items-center p-4">
                  <span>{club.country}</span>
                </div>
                <div className="flex items-center p-4">
                  <span>{club.memberType}</span>
                </div>
                <div className="flex items-center p-4">
                  <a
                    className="text-cyan-700 hover:underline"
                    href={`https://${club.website.toString()}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {club.website.toString()}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-6 flex justify-center">
              <Pagination
                currentPage={currentPage}
                onPageSelect={handlePageChange}
                pages={paginationItems}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
