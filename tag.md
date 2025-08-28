project to-do-list checkbox full part3, project ini memiliki perbaikan dari part 2 sebelumnya
antaranya:
- fitur undo yang lebih halus dan perbaikkan
- fitur redo akan ditambahkan
- fitur darkmode lebih interaktif
- UI dipastikan lebih bagus dan user friendly
- UI alert lebih bagus
- penghapusan total
- peringatan sebelum penghapusan total
- setiap todo memiliki fitur penghapusan bagi dirinya sendiri
- fitur edit todo
- todo memiliki id (yang nantinya bisa difilter) dan tanggal pembuatannya
- validasi input saat pembuatan todo





			<li class="todo p-[1rem] bg-zinc-300 rounded-md shadow-sm shadow-gray-300 pt-2">
				<div class="head-todo flex items-center justify-between mb-3">
					<time class="time-todo lg:text-lg">January, 12 2025</time>
					<span class="delete-button w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center hover:cursor-pointer active:scale-[0.9]">
						<i class="material-symbols-outlined size">delete</i>
					</span>
				</div>

				<div class="body-todo py-1 flex flex-col lg:flex-row items-center gap-3">
					<div class="todo-activity-wrapper w-full lg:grow relative">
						<textarea class="activity-input w-full resize-none text-[1.3rem] lg:text-[1.6rem]" disabled>hello world</textarea>
						<span class="edit-activity-button w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] hidden items-center justify-center absolute right-[10px] top-[50%] translate-y-[-50%] hover:cursor-pointer active:scale-[0.9] opacity-0 hover:opacity-100 hover:flex">
							<i class="material-symbols-outlined size">edit</i>
						</span>
					</div>
					<div class="todo-checkbox-wrapper w-full lg:w-[60%] py-2 flex items-center gap-3 justify-center">
						<div class="checkbox-input-wrapper w-[40px] h-[40px] relative">
							<input class="checkbox-input w-full h-full" type="checkbox" />
						</div>
						<div class="checkbox-input-wrapper w-[40px] h-[40px] relative">
							<input class="checkbox-input w-full h-full" type="checkbox" />
						</div>
						<div class="checkbox-input-wrapper w-[40px] h-[40px] relative">
							<input class="checkbox-input w-full h-full" type="checkbox" />
						</div>
						<div class="checkbox-input-wrapper w-[40px] h-[40px] relative">
							<input class="checkbox-input w-full h-full" type="checkbox" />
						</div>
						<div class="checkbox-input-wrapper w-[40px] h-[40px] relative">
							<input class="checkbox-input w-full h-full" type="checkbox" />
						</div>
						<div class="checkbox-input-wrapper w-[40px] h-[40px] relative">
							<input class="checkbox-input w-full h-full" type="checkbox" />
						</div>
						<div class="checkbox-input-wrapper w-[40px] h-[40px] relative">
							<input class="checkbox-input w-full h-full" type="checkbox" />
						</div>
					</div>
				</div>
			</li>