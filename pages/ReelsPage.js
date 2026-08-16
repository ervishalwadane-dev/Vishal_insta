import { test } from '@playwright/test';

class ReelsPage {

    constructor(page) {

        this.page = page;
        this.reelsbutton = page.getByRole('img', { name: 'Reels' });
        this.LikesBtn = page.locator('svg').filter({ hasText: 'Like' }).first();

    }
    async ReelsTabButton() {
        await this.reelsbutton.click();
    }

    async Likes() {
        await this.LikesBtn.click();
        //await this.page.pause();

    }
}

module.exports = { ReelsPage };

