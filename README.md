<p align="center" style="position: relative; display: inline-block;">
	<a href="https://drive.google.com/file/d/1NjPumumvjBCWaDsKOz977TDqh0bqjGNJ/view?usp=sharing" target="_blank" style="display: inline-block; position: relative;">
		<img src="public/snap.png" alt="Demo Video Preview" style="width: 100%; max-width: 600px; border-radius: 8px; display: block;">
		<img src="https://img.icons8.com/ios-filled/100/ffffff/play-button-circled.png" alt="Play Video" style="position: absolute; top: 50%; left: 50%; width: 80px; height: 80px; transform: translate(-50%, -50%); opacity: 0.8; pointer-events: none;" />
	</a>
</p>

<a href="public/demo.mp4" target="_blank">
	<img src="https://img.icons8.com/ios-filled/100/000000/play-button-circled.png" alt="Play Demo Video" width="80" style="vertical-align:middle; margin-right:10px;"/>
	<b>Watch Demo Video</b>
</a>

<br/>

<video controls width="100%" src="public/demo.mp4">Your browser does not support the video tag. Download the demo from `public/demo.mp4`.</video>

**Overview**

This is the frontend for the SIM HEALTH AI task (React + Vite + TypeScript). The demo video above (`public/demo.mp4`) showcases the app's main functionality: responsive UI, CRUD operations for student data, and client-side caching (stored in browser cache / `localStorage`).

**Folder Structure**

- `public/` : static files (includes `demo.mp4`)
- `src/` : application source
	- `App.tsx`
	- `main.tsx`
	- `assets/`
	- `components/`
		- `CreateStudentModel.tsx`
		- `HeaderWidget.tsx`
		- `StudentTable.tsx`
		- `ui/`
			- `button.tsx`
			- `CustomButton.tsx`
			- `DropDown.tsx`
			- `Pagination.tsx`
			- `TextField.tsx`
	- `data/`
		- `students.ts`
		- `tableColumns.ts`
	- `lib/`
		- `utils.ts`
	- `pages/`
		- `StudentsPage.tsx`
	- `services/`
		- `storageService.ts` (caching layer)
	- `styles/`
		- `index.css`
	- `types/`
		- `dropDown.ts`
		- `paginate.ts`
		- `student.ts`

**Installation**

- **Prerequisites:** Node.js (recommended v16+), `npm` or `pnpm` installed.
- **Install dependencies:**

	```powershell
	npm install
	```

**Run (development)**

- Start the dev server with:

	```powershell
	npm run dev
	```

- Open the URL printed by Vite (usually `http://localhost:5173`). The demo video will be served at `/demo.mp4` while the dev server is running.

**Build & Preview**

- Build for production:

	```powershell
	npm run build
	```

- Preview the production build locally:

	```powershell
	npm run preview
	```

**Features**

- **Responsive UI:** Components and pages adapt to different screen sizes (check the demo video for a quick walkthrough).
- **Client-side caching:** App uses a simple caching layer (`src/services/storageService.ts`) to persist student data in browser storage (`localStorage`) so that data remains between reloads.
- **CRUD operations:** Create, read, update and delete student records are performed in-memory and persisted to cache — see `CreateStudentModel.tsx` and `StudentTable.tsx`.
- **Lightweight stack:** Built with React, Vite and TypeScript for fast development iteration.

**Notes**

- The demo video file is located at `public/demo.mp4` and demonstrates responsiveness, caching behavior, and CRUD flows.
- When running the dev server the video can be previewed at `http://localhost:5173/demo.mp4`.
- If you want the demo embedded elsewhere (e.g., a docs site), the `<video>` tag at the top of this README is a simple inline example.

If you'd like, I can also add a short CONTRIBUTING or HOWTO that explains where to change the cache key, or add screenshots/GIFs for README viewers where GitHub doesn't render local MP4s inline.

