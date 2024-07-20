// app/api/users/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET(req: NextRequest) {
    // Get the number of users from the query parameter, defaulting to 10
    const { searchParams } = new URL(req.url);
    const userCountParam = searchParams.get('count');
    const numberOfUsers = userCountParam ? parseInt(userCountParam, 10) : 10;

    // Ensure the number of users is a positive integer
    const validUserCount = Math.max(1, numberOfUsers);

    const users = Array.from({ length: validUserCount }, () => {
        const postCount = faker.number.int({ min: 0, max: 100 }); // Generate post count

        return {
            name: faker.person.fullName(),
            username: faker.internet.userName().toLowerCase(),
            followers: faker.number.int({ min: 0, max: 1000000 }),
            following: faker.number.int({ min: 0, max: 1000000 }),
            profilePic: faker.image.avatar(),
            emailId: faker.internet.email().toLowerCase(),
            postCount: postCount,
            images: Array.from({ length: postCount }, () => faker.image.url()), // Set images to match postCount
        };
    });

    return NextResponse.json({ status: 200, userCount: validUserCount, users });
}