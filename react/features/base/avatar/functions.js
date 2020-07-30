// @flow

import _ from 'lodash';

const AVATAR_COLORS = [
    '54, 130, 127',
    '0, 148, 198',
    '114, 78, 145',
    '248, 198, 48',
    '255, 49, 46'
];

const AVATAR_OPACITY = 1;

/**
 * Generates the background color of an initials based avatar.
 *
 * @param {string?} initials - The initials of the avatar.
 * @returns {string}
 */
export function getAvatarColor(initials: ?string) {
    let colorIndex = 0;

    if (initials) {
        let nameHash = 0;

        for (const s of initials) {
            nameHash += s.codePointAt(0);
        }

        colorIndex = nameHash % AVATAR_COLORS.length;
    }

    return `rgba(${AVATAR_COLORS[colorIndex]}, ${AVATAR_OPACITY})`;
}

/**
 * Generates initials for a simple string.
 *
 * @param {string?} s - The string to generate initials for.
 * @returns {string?}
 */
export function getInitials(s: ?string) {
    // We don't want to use the domain part of an email address, if it is one
    const initialsBasis = _.split(s, '@')[0];
    const words = _.words(initialsBasis);
    let initials = '';

    for (const w of words) {
        (initials.length < 2) && (initials += w.substr(0, 1).toUpperCase());
    }

    return initials;
}
