import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header.component';
import { CommunityModalComponent } from './shared/components/community-modal.component';
import { IpaSidebarComponent } from './features/ipa-sidebar/ipa-sidebar.component';
import { AnatomyViewerComponent } from './features/anatomy-viewer/anatomy-viewer.component';
import { PhonemeGuideComponent } from './features/phoneme-guide/phoneme-guide.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CommunityModalComponent,
    IpaSidebarComponent,
    AnatomyViewerComponent,
    PhonemeGuideComponent
  ],
  template: `
    <div class="min-h-screen lg:h-screen flex flex-col dark:bg-slate-950 bg-slate-100 dark:text-slate-100 text-slate-900 overflow-x-hidden lg:overflow-hidden">
      <!-- Thanh điều hướng trên cùng: Logo Lautform, chọn ngôn ngữ giải thích -->
      <app-header />

      <!-- Bố cục 3 cột cố định trên màn hình Desktop: Trái (25%) - Giữa (45%) - Phải (30%) -->
      <main class="flex-1 flex flex-col lg:flex-row min-h-0 overflow-y-auto lg:overflow-hidden">
        <!-- Cột trái (25%): Bảng chọn Nguyên âm, Nguyên âm đôi, Phụ âm -->
        <div class="w-full lg:w-[25%] lg:h-full shrink-0 min-h-0">
          <app-ipa-sidebar />
        </div>

        <!-- Cột giữa (45%): Khung mô phỏng giải phẫu SVG và cụm thanh trượt điều khiển audio/timeline -->
        <div class="w-full lg:w-[45%] lg:h-full shrink-0 min-h-0">
          <app-anatomy-viewer />
        </div>

        <!-- Cột phải (30%): Chi tiết âm đang chọn, Từ ví dụ, Cách phát âm từng bước, Lỗi thường gặp -->
        <div class="w-full lg:w-[30%] lg:h-full shrink-0 min-h-0">
          <app-phoneme-guide />
        </div>
      </main>

      <!-- Hộp thoại Cộng đồng, Ghi công bản quyền âm thanh & Đóng góp mã nguồn mở -->
      <app-community-modal />
    </div>
  `
})
export class AppComponent {}
