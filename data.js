// Dữ liệu cho Section 1
const section1Data = [
  {
    id: "overview-1",
    chapterNum: "01",
    chapterTitle: "Tổng quan & 7 Nguyên lý Kinh tế Vi mô",
    chapterSub: "Chapter 1: Microeconomics vs Macroeconomics & Seven Principles",
    blocks: [
      {
        type: "concept",
        title: "1. Microeconomics vs. Macroeconomics (Vi mô và Vĩ mô)",
        content: `
          <div class="compare">
            <div class="compare-card">
              <h4>Microeconomics (Kinh tế Vi mô)</h4>
              <p>Là nhánh của kinh tế học đối phó với hành vi của các đơn vị kinh tế cá nhân...</p>
              <p style="margin-top:8px;"><strong>Trọng tâm:</strong> Là lý thuyết ra quyết định dưới sự khan hiếm kinh tế.</p>
            </div>
            <div class="compare-card">
              <h4>Macroeconomics (Kinh tế Vĩ mô)</h4>
              <p>Nhánh kinh tế học giải quyết các biến số kinh tế tổng hợp...</p>
            </div>
          </div>
        `
      },
      {
        type: "trap",
        title: "⚠️ Bẫy kinh điển (Red Flags)",
        content: `
          <ul>
            <li><strong>Chi phí cơ hội:</strong> Rất nhiều người quên tính chi phí ẩn.</li>
            <li><strong>Efficiency vs. Equality:</strong> Không có chính sách nào thỏa mãn tối đa cả hai.</li>
          </ul>
        `
      }
    ]
  }
  // Bạn sẽ dán Chapter 2, 3... do AI tạo vào bên dưới phần này
];
// =========================================================================
// SECTION 2 DATA
// =========================================================================
const section2Data = [
  {
    id: "overview-2",
    chapterNum: "00",
    chapterTitle: "Tổng quan: Theory of Consumer Behavior",
    chapterSub: "Lý thuyết hành vi người tiêu dùng — Khung phân tích 3 bước",
    blocks: [
      {
        type: "concept",
        title: "Consumer Behavior Theory",
        conceptEn: "DEFINITION IN ENGLISH",
        content: `
          <p><strong>Theory of consumer behavior</strong>: Description of how consumers allocate incomes among different goods and services to <strong>maximize their well-being</strong>.</p>
          <p>Lý thuyết hành vi người tiêu dùng mô tả cách người tiêu dùng phân bổ thu nhập giữa các hàng hóa và dịch vụ khác nhau để <strong>tối đa hóa phúc lợi</strong> (sự thỏa mãn) của họ.</p>
        `
      },
      {
        type: "formula",
        title: "3-Step Framework",
        content: `
          Step 1: Consumer Preferences  →  "Tôi thích cái gì?"<br>
          Step 2: Budget Constraints    →  "Tôi có thể mua được gì?"<br>
          Step 3: Consumer Choices      →  "Tôi sẽ chọn gì để tối ưu?"
        `
      },
      {
        type: "keywords",
        title: "🔑 Keywords cần nhớ",
        content: `
          <span class="kw">allocate income</span>
          <span class="kw">maximize well-being</span>
          <span class="kw">preferences</span>
          <span class="kw">budget constraints</span>
          <span class="kw">consumer choices</span>
        `
      },
      {
        type: "trap",
        title: "⚠️ Bẫy thường gặp",
        content: `
          <ul>
            <li><strong>Nhầm thứ tự 3 bước:</strong> Preferences (sở thích) phân tích TRƯỚC budget (ngân sách). Sở thích là chủ quan, ngân sách mới là giới hạn khách quan. Tuy nhiên trong thực tế cả hai tương tác cùng lúc.</li>
            <li><strong>"Maximize utility" ≠ "spend all money":</strong> Tối đa hóa tiện ích không có nghĩa là tiêu hết tiền (dù trong mô hình 1 kỳ thì thường vậy), mà là chọn rổ hàng tốt nhất trong giới hạn ngân sách.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "budget",
    chapterNum: "01",
    chapterTitle: "Budget Constraints",
    chapterSub: "Ràng buộc ngân sách",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="budget-line">
          <div class="concept-title">Budget Constraints &amp; The Budget Line</div>
          <div class="concept-en">RÀNG BUỘC NGÂN SÁCH VÀ ĐƯỜNG NGÂN SÁCH</div>

          <svg class="svg-chart" viewBox="0 0 350 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="180" x2="320" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <line x1="40" y1="20" x2="40" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <text x="310" y="195" class="axis-label">Food (F)</text>
            <text x="5" y="15" class="axis-label">Clothes (C)</text>
            <line x1="40" y1="50" x2="220" y2="180" stroke="#1a1a2e" stroke-width="3"/>
            <text x="225" y="175" font-weight="bold" fill="#1a1a2e">L₁</text>
            <line x1="90" y1="50" x2="270" y2="180" stroke="#1a7a4a" stroke-width="2" stroke-dasharray="5"/>
            <text x="275" y="175" font-weight="bold" fill="#1a7a4a">L₂ (I tăng)</text>
            <line x1="40" y1="50" x2="300" y2="180" stroke="#c0392b" stroke-width="2" stroke-dasharray="5"/>
            <text x="305" y="175" font-weight="bold" fill="#c0392b">L₃ (PF giảm)</text>
            <circle cx="40" cy="50" r="4" fill="#1a1a2e"/>
          </svg>

          <div class="concept-body">
            <p><strong>Budget Constraints:</strong> Constraints that consumers face as a result of <strong>limited incomes</strong>.</p>
            <p>Ràng buộc ngân sách là giới hạn mà người tiêu dùng phải đối mặt vì thu nhập có hạn. Đây là thực tế hiển nhiên: bạn không thể mua mọi thứ bạn muốn vì túi tiền có giới hạn.</p>
            <p><strong>The Budget Line:</strong> All combinations of goods for which the <strong>total amount of money spent equals income</strong>.</p>
            <p>Đường ngân sách (budget line) là tập hợp tất cả các rổ hàng hóa mà người tiêu dùng có thể mua khi <strong>tiêu hết toàn bộ thu nhập</strong>. Đây là đường thẳng dốc xuống trên đồ thị.</p>
          </div>

          <div class="formula">
            <div class="label">Budget Line Equation</div>
            \\[ P_F \\cdot F + P_C \\cdot C = I \\]<br>
            Ví dụ cụ thể từ slide:<br>
            \\( \\$1 \\cdot F + \\$2 \\cdot C = \\$80 \\)<br>
            \\( \\rightarrow F + 2C = 80 \\)<br><br>
            Intercepts (điểm chặn trục):<br>
            F-axis: \\( F = I/P_F = 80/1 = 80 \\) (nếu chỉ mua Food)<br>
            C-axis: \\( C = I/P_C = 80/2 = 40 \\) (nếu chỉ mua Clothing)
          </div>

          <table>
            <tr><th>Market Basket</th><th>Food (F)</th><th>Clothing (C)</th><th>Total Spending</th></tr>
            <tr><td>A</td><td>0</td><td>40</td><td>$80 ✓</td></tr>
            <tr><td>B</td><td>20</td><td>30</td><td>$80 ✓</td></tr>
            <tr><td>D</td><td>40</td><td>20</td><td>$80 ✓</td></tr>
            <tr><td>E</td><td>60</td><td>10</td><td>$80 ✓</td></tr>
            <tr><td>G</td><td>80</td><td>0</td><td>$80 ✓</td></tr>
          </table>

          <div class="formula">
            <div class="label">Slope of Budget Line</div>
            \\[ \\text{Slope} = -\\frac{P_F}{P_C} = -\\frac{1}{2} \\]<br>
            Ý nghĩa kinh tế: Để mua thêm 1 đơn vị Food, phải từ bỏ 1/2 đơn vị Clothing.<br>
            → Đây chính là "chi phí cơ hội" (opportunity cost) của Food tính bằng Clothing.
          </div>

          <div class="keywords">
            <div class="keywords-title">🔑 Keywords</div>
            <div class="kw-list">
              <span class="kw">P_F · F + P_C · C = I</span>
              <span class="kw">slope = −P_F/P_C</span>
              <span class="kw">intercept = I/P</span>
              <span class="kw">opportunity cost</span>
              <span class="kw">market basket</span>
            </div>
          </div>

          <div class="trap">
            <div class="trap-title">⚠️ Bẫy &amp; Nhầm lẫn thường gặp</div>
            <ul>
              <li><strong>Slope âm ≠ "xấu":</strong> Dốc âm phản ánh đánh đổi (trade-off) — để có thêm thứ này phải bỏ bớt thứ kia. Đây là quy luật kinh tế tự nhiên.</li>
              <li><strong>Điểm DƯỚI đường ngân sách:</strong> Là "có thể mua được" nhưng chưa tiêu hết tiền. Trong mô hình tĩnh 1 kỳ, không tối ưu vì còn tiền dư. Điểm TRÊN đường ngân sách là "không thể mua được" (unattainable).</li>
              <li><strong>Slope của budget line ≠ MRS:</strong> Slope của budget line = tỷ lệ giá (\\( P_F/P_C \\)), còn MRS là độ dốc của đường bàng quan (indifference curve) — hai khái niệm KHÁC NHAU, chỉ bằng nhau tại điểm tối ưu.</li>
              <li><strong>Nhớ dấu âm:</strong> Slope = \\( -P_F/P_C \\) (không phải dương). Vì tăng F thì phải giảm C.</li>
            </ul>
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 1 — Budget Line</div>
            <div class="ex-q">Thu nhập \\( I = \\$120 \\). Giá Pizza \\( P_P = \\$3 \\)/cái, giá Soda \\( P_S = \\$2 \\)/lon. Hãy: (a) Viết phương trình đường ngân sách. (b) Tìm các điểm chặn trục. (c) Tính slope và giải thích ý nghĩa kinh tế.</div>
            <div class="ex-en">Income I = $120. Price of Pizza P_P = $3, Price of Soda P_S = $2. (a) Write the budget line equation. (b) Find the intercepts. (c) Calculate slope and explain economic meaning.</div>
            <details>
              <summary>Xem đáp án & giải thích</summary>
              <div class="answer">
                <div class="answer-title">Đáp án</div>
                <p><strong>(a) Phương trình:</strong> \\( 3P + 2S = 120 \\)</p>
                <p><strong>(b) Điểm chặn:</strong></p>
                <p>• Trục Pizza (S=0): \\( P = 120/3 = \\) <span class="hl-red">40 cái Pizza</span> (nếu chỉ mua Pizza)</p>
                <p>• Trục Soda (P=0): \\( S = 120/2 = \\) <span class="hl-blue">60 lon Soda</span> (nếu chỉ mua Soda)</p>
                <p><strong>(c) Slope:</strong> \\( = -P_P/P_S = -3/2 = \\) <span class="hl-red">-1.5</span></p>
                <p><strong>Ý nghĩa kinh tế:</strong> Để mua thêm 1 cái Pizza, người tiêu dùng phải từ bỏ 1.5 lon Soda. Hay nói cách khác, chi phí cơ hội của 1 Pizza = 1.5 Soda. Đây phản ánh tỷ lệ giá trên thị trường — Pizza đắt hơn Soda 1.5 lần.</p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="income-change">
          <div class="concept-title">Effects of Income Changes on Budget Line</div>
          <div class="concept-en">TÁC ĐỘNG CỦA THAY ĐỔI THU NHẬP ĐẾN ĐƯỜNG NGÂN SÁCH</div>
          <div class="concept-body">
            <p>A change in income (with prices unchanged) causes the budget line to <strong>shift parallel</strong> to the original line.</p>
            <p>Khi thu nhập thay đổi (giá cả không đổi), đường ngân sách <strong>dịch chuyển song song</strong>:</p>
            <ul>
              <li><strong>Thu nhập tăng</strong> → đường ngân sách dịch ra ngoài (outward shift) → người tiêu dùng có thể mua nhiều hơn</li>
              <li><strong>Thu nhập giảm</strong> → đường ngân sách dịch vào trong (inward shift) → sức mua giảm</li>
            </ul>
            <p>Từ slide: I=$80 (L1) → I=$160 (L2, dịch ra) → I=$40 (L3, dịch vào)</p>
          </div>

          <div class="formula">
            <div class="label">Tại sao song song?</div>
            Slope = \\( -P_F/P_C \\) → Giá không đổi, nên slope không đổi<br>
            Chỉ có intercepts thay đổi: \\( I/P_F \\) và \\( I/P_C \\) đều tăng/giảm cùng tỷ lệ<br>
            → Đường mới song song với đường cũ ✓
          </div>

          <div class="keywords">
            <div class="keywords-title">🔑 Keywords</div>
            <div class="kw-list">
              <span class="kw">parallel shift</span>
              <span class="kw">income increase → outward</span>
              <span class="kw">income decrease → inward</span>
              <span class="kw">slope unchanged</span>
            </div>
          </div>

          <div class="trap">
            <div class="trap-title">⚠️ Bẫy</div>
            <ul>
              <li><strong>Income thay đổi → PARALLEL shift (song song), không xoay.</strong> Ngược lại, giá thay đổi → ROTATE (xoay). Đây là câu hỏi trắc nghiệm rất hay bẫy!</li>
              <li><strong>Proportional price change = income change:</strong> Nếu cả \\( P_F \\) và \\( P_C \\) đều tăng/giảm cùng tỷ lệ, tác động giống hệt thay đổi thu nhập theo chiều ngược lại — đường ngân sách dịch song song.</li>
            </ul>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="price-change">
          <div class="concept-title">Effects of Price Changes on Budget Line</div>
          <div class="concept-en">TÁC ĐỘNG CỦA THAY ĐỔI GIÁ ĐẾN ĐƯỜNG NGÂN SÁCH</div>
          <div class="concept-body">
            <p>A change in the price of one good (with income unchanged) causes the budget line to <strong>rotate</strong> about one intercept.</p>
            <p>Khi giá của một hàng hóa thay đổi (thu nhập không đổi), đường ngân sách <strong>xoay quanh một điểm chặn trục</strong>:</p>
            <ul>
              <li><strong>Giá Food giảm (P_F ↓):</strong> Intercept trên trục F = \\( I/P_F \\) tăng → đường xoay ra ngoài quanh intercept trục C</li>
              <li><strong>Giá Food tăng (P_F ↑):</strong> Intercept trên trục F = \\( I/P_F \\) giảm → đường xoay vào trong quanh intercept trục C</li>
            </ul>
            <p>Từ slide: \\( P_F \\) = $1 (L1), \\( P_F \\) giảm = $0.50 (L2 xoay ra), \\( P_F \\) tăng = $2 (L3 xoay vào)</p>
          </div>

          <div class="formula">
            <div class="label">Tại sao xoay (ROTATE)?</div>
            Intercept trục C = \\( I/P_C \\) → KHÔNG thay đổi (vì \\( P_C \\), I không đổi)<br>
            Intercept trục F = \\( I/P_F \\) → THAY ĐỔI (vì \\( P_F \\) thay đổi)<br>
            Slope = \\( -P_F/P_C \\) → THAY ĐỔI<br>
            → Một đầu cố định, một đầu di chuyển → XoAY (rotate) ✓
          </div>

          <div class="keywords">
            <div class="keywords-title">🔑 Keywords</div>
            <div class="kw-list">
              <span class="kw">rotate about one intercept</span>
              <span class="kw">price decrease → rotate outward</span>
              <span class="kw">price increase → rotate inward</span>
              <span class="kw">slope changes</span>
              <span class="kw">one intercept fixed</span>
            </div>
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 2 — Income vs Price Change</div>
            <div class="ex-q">I = $60, P_X = $2, P_Y = $3. Xét hai tình huống: (A) Thu nhập tăng lên $90. (B) Giá X giảm xuống $1. Mô tả sự thay đổi đường ngân sách trong mỗi tình huống và cho biết sự khác biệt.</div>
            <details>
              <summary>Xem đáp án & giải thích</summary>
              <div class="answer">
                <div class="answer-title">Đáp án</div>
                <p><strong>Đường ngân sách ban đầu:</strong> \\( 2X + 3Y = 60 \\)</p>
                <p>• Intercept X: X = 30 &nbsp;|&nbsp; Intercept Y: Y = 20 &nbsp;|&nbsp; Slope = \\( -2/3 \\)</p>
                <p><strong>(A) Thu nhập tăng I = $90:</strong></p>
                <p>Đường mới: \\( 2X + 3Y = 90 \\)</p>
                <p>• Intercept X = 45, Intercept Y = 30, Slope vẫn = \\( -2/3 \\)</p>
                <p>→ <span class="hl-green">Đường dịch SONG SONG ra ngoài</span> (parallel shift outward)</p>
                <p><strong>(B) Giá X giảm P_X = $1:</strong></p>
                <p>Đường mới: \\( 1X + 3Y = 60 \\)</p>
                <p>• Intercept X = 60 (tăng từ 30 lên 60)</p>
                <p>• Intercept Y = 20 (không đổi!)</p>
                <p>• Slope mới = \\( -1/3 \\) (thoải hơn)</p>
                <p>→ <span class="hl-red">Đường XOAY ra ngoài quanh intercept Y = 20</span> (rotate outward about Y-intercept)</p>
              </div>
            </details>
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "preferences",
    chapterNum: "02",
    chapterTitle: "Consumer Preferences",
    chapterSub: "Sở thích người tiêu dùng",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="axioms">
          <div class="concept-title">Three Basic Assumptions (Axioms) of Preferences</div>
          <div class="concept-en">BA TIÊN ĐỀ CƠ BẢN CỦA SỞ THÍCH</div>
          <div class="concept-body">
            <p>Để xây dựng lý thuyết sở thích, kinh tế học giả định người tiêu dùng có sở thích thỏa mãn 3 tiên đề (axioms):</p>
          </div>

          <div style="background:var(--card-bg);border:1.5px solid var(--border);border-radius:8px;overflow:hidden;margin:16px 0;">
            <div style="padding:16px 20px;border-bottom:1px solid var(--border);">
              <h4 style="font-family:'Playfair Display',serif;color:var(--accent);margin-bottom:8px;">① Completeness (Tính đầy đủ)</h4>
              <p style="font-size:15px;"><strong>EN:</strong> For any two market baskets A and B, a consumer will: prefer A to B, OR prefer B to A, OR be indifferent between the two.</p>
              <p style="font-size:15px;margin-top:8px;"><strong>VI:</strong> Người tiêu dùng luôn có thể so sánh và xếp hạng MỌI cặp rổ hàng. Không có trường hợp "không biết chọn cái nào" trong mô hình này. Với bất kỳ A và B: hoặc A ≻ B, hoặc B ≻ A, hoặc A ~ B (bàng quan).</p>
            </div>
            <div style="padding:16px 20px;border-bottom:1px solid var(--border);">
              <h4 style="font-family:'Playfair Display',serif;color:var(--accent);margin-bottom:8px;">② Transitivity (Tính bắc cầu)</h4>
              <p style="font-size:15px;"><strong>EN:</strong> If a consumer prefers A to B and B to C, then the consumer also prefers A to C.</p>
              <p style="font-size:15px;margin-top:8px;"><strong>VI:</strong> Nếu A ≻ B và B ≻ C thì A ≻ C. Đây là tính nhất quán trong sở thích — không có vòng lặp mâu thuẫn. Ví dụ: nếu thích Sushi hơn Phở, thích Phở hơn Cơm, thì phải thích Sushi hơn Cơm.</p>
            </div>
            <div style="padding:16px 20px;">
              <h4 style="font-family:'Playfair Display',serif;color:var(--accent);margin-bottom:8px;">③ More is Better (Không bão hòa / Tính phi bão hòa)</h4>
              <p style="font-size:15px;"><strong>EN:</strong> Goods are desirable. Consumers always prefer more of any good to less. Consumers are never satiated.</p>
              <p style="font-size:15px;margin-top:8px;"><strong>VI:</strong> Hàng hóa luôn là "tốt" (goods, không phải "bads"). Nhiều hơn luôn tốt hơn, dù chỉ tốt hơn một chút. Đây gọi là giả định "non-satiation".</p>
            </div>
          </div>

          <div class="keywords">
            <div class="keywords-title">🔑 Keywords</div>
            <div class="kw-list">
              <span class="kw">Completeness</span>
              <span class="kw">Transitivity</span>
              <span class="kw">Non-satiation</span>
              <span class="kw">A ≻ B (A preferred to B)</span>
              <span class="kw">A ~ B (indifferent)</span>
              <span class="kw">rational consumer</span>
            </div>
          </div>

          <div class="trap">
            <div class="trap-title">⚠️ Bẫy về 3 Axioms</div>
            <ul>
              <li><strong>Completeness không có nghĩa là "thích tất cả mọi thứ như nhau":</strong> Chỉ có nghĩa là có thể so sánh và ra quyết định.</li>
              <li><strong>Transitivity là điều kiện đủ cho sự nhất quán nhưng không phải điều kiện cần trong thực tế:</strong> Trong thực nghiệm con người đôi khi vi phạm transitivity — nhưng trong lý thuyết chuẩn tắc, đây là giả định nền tảng.</li>
            </ul>
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 3 — Kiểm tra Axioms</div>
            <div class="ex-q">Cho biết sở thích của Nam: Bún bò ≻ Phở, Phở ~ Mì Quảng, Cơm ≻ Bún bò. Hỏi: (a) Sở thích có thỏa mãn Transitivity không? (b) Xếp hạng toàn bộ 4 món theo sở thích của Nam.</div>
            <details>
              <summary>Xem đáp án</summary>
              <div class="answer">
                <div class="answer-title">Đáp án</div>
                <p><strong>(a) Kiểm tra Transitivity:</strong></p>
                <p>• Bún bò ≻ Phở và Phở ~ Mì Quảng → Bún bò ≻ Mì Quảng ✓</p>
                <p>• Cơm ≻ Bún bò và Bún bò ≻ Phở → Cơm ≻ Phở ✓</p>
                <p>→ <span class="hl-green">Có, thỏa mãn Transitivity.</span></p>
                <p><strong>(b) Xếp hạng:</strong> Cơm ≻ Bún bò ≻ Phở ~ Mì Quảng</p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="ic">
          <div class="concept-title">Indifference Curves &amp; Indifference Maps</div>
          <div class="concept-en">ĐƯỜNG BÀNG QUAN VÀ BẢN ĐỒ BÀNG QUAN</div>
          
          <svg class="svg-chart" viewBox="0 0 300 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="180" x2="280" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <line x1="30" y1="20" x2="30" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <line x1="30" y1="40" x2="240" y2="180" stroke="#1a1a2e" stroke-width="2"/>
            <path d="M 40 80 Q 70 140 160 160" fill="none" stroke="#2471a3" stroke-width="2" stroke-dasharray="3"/>
            <text x="165" y="170" fill="#2471a3">U₁</text>
            <path d="M 70 60 Q 115 130 230 145" fill="none" stroke="#c0392b" stroke-width="3"/>
            <text x="235" y="150" fill="#c0392b" font-weight="bold">U₂ (Optimum)</text>
            <path d="M 100 40 Q 160 100 260 120" fill="none" stroke="#2471a3" stroke-width="2" stroke-dasharray="3"/>
            <text x="265" y="125" fill="#2471a3">U₃</text>
            <circle cx="135" cy="110" r="5" fill="#1a1a2e"/>
            <text x="145" y="105" font-weight="bold">A (Tối ưu)</text>
          </svg>

          <div class="concept-body">
            <p><strong>Indifference Curve:</strong> Curve representing all combinations of market baskets that provide a consumer with the <strong>same level of satisfaction</strong>.</p>
            <p>Đường bàng quan là tập hợp tất cả các rổ hàng mang lại <strong>cùng mức độ thỏa mãn</strong> cho người tiêu dùng.</p>
            <p><strong>Indifference Map:</strong> A set of indifference curves showing all market baskets among which a consumer is indifferent — each curve representing a different utility level.</p>
            <p>Bản đồ bàng quan là TẬP HỢP các đường bàng quan. Đường càng xa gốc tọa độ → mức thỏa mãn càng cao: U3 &gt; U2 &gt; U1.</p>
          </div>

          <div style="background:var(--card-bg);border:1.5px solid var(--border);border-radius:8px;padding:16px 20px;margin:16px 0;">
            <h4 style="font-family:'Playfair Display',serif;margin-bottom:12px;">4 Tính chất của Indifference Curves</h4>
            <p style="margin-bottom:8px;font-size:15px;"><strong>① Dốc xuống (Downward sloping):</strong> Do axiom "more is better" — để duy trì cùng mức utility, giảm X thì phải tăng Y.</p>
            <p style="margin-bottom:8px;font-size:15px;"><strong>② Các đường bàng quan KHÔNG cắt nhau (Cannot intersect):</strong> Nếu cắt nhau → mâu thuẫn logic (vi phạm transitivity).</p>
            <p style="margin-bottom:8px;font-size:15px;"><strong>③ Lồi về phía gốc tọa độ (Convex to origin):</strong> Phản ánh MRS giảm dần — càng có nhiều X, càng sẵn sàng từ bỏ ít Y hơn để có thêm X.</p>
            <p style="font-size:15px;"><strong>④ Đường càng xa gốc tọa độ → utility càng cao</strong> (do non-satiation axiom).</p>
          </div>

          <div class="formula">
            <div class="label">Tại sao IC không được cắt nhau? (Proof by contradiction)</div>
            Giả sử U1 và U2 cắt nhau tại điểm A.<br>
            Gọi B ∈ U1, D ∈ U2, và B có nhiều cả X lẫn Y hơn D.<br>
            • A ∈ U1 và B ∈ U1 → A ~ B<br>
            • A ∈ U2 và D ∈ U2 → A ~ D<br>
            • Transitivity: A ~ B và A ~ D → B ~ D<br>
            • Nhưng B có nhiều hơn D → B ≻ D (more is better) → MÂU THUẪN! ✗<br>
            → IC không thể cắt nhau
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="mrs">
          <div class="concept-title">Marginal Rate of Substitution (MRS)</div>
          <div class="concept-en">TỶ LỆ THAY THẾ BIÊN</div>
          <div class="concept-body">
            <p><strong>MRS:</strong> The maximum amount of one good that a consumer is willing to give up in order to obtain one additional unit of another good, <strong>while maintaining the same utility level</strong>.</p>
            <p>MRS là lượng tối đa của hàng hóa Y mà người tiêu dùng sẵn sàng từ bỏ để có thêm 1 đơn vị hàng hóa X, <strong>trong khi giữ nguyên mức thỏa mãn</strong>. MRS chính là độ dốc tuyệt đối (absolute value of slope) của đường bàng quan tại một điểm.</p>
          </div>

          <div class="formula">
            <div class="label">MRS Formula &amp; Relationship to Marginal Utility</div>
            \\[ \\text{MRS}_{XY} = -\\frac{\\Delta Y}{\\Delta X} = |\\text{slope of IC}| \\]<br>
            Liên hệ với Marginal Utility:<br>
            \\[ \\text{MRS}_{XY} = \\frac{MU_X}{MU_Y} \\]<br>
            Tại sao? Dọc theo IC, tổng thay đổi utility = 0:<br>
            \\( MU_X \\cdot \\Delta X + MU_Y \\cdot \\Delta Y = 0 \\)<br>
            → \\( -\\frac{\\Delta Y}{\\Delta X} = \\frac{MU_X}{MU_Y} = \\text{MRS}_{XY} \\) ✓
          </div>

          <div class="concept-body">
            <p><strong>Diminishing MRS (MRS giảm dần):</strong> As we move down along an IC, the MRS falls. This means the consumer is willing to give up less and less Y for each additional unit of X.</p>
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 5 — Tính MRS</div>
            <div class="ex-q">Cho hàm utility \\( U = X \\cdot Y \\) (Cobb-Douglas). Tại giỏ hàng \\( A = (4, 6) \\): (a) Tính \\( MU_X \\) và \\( MU_Y \\). (b) Tính \\( \\text{MRS}_{XY} \\).</div>
            <details>
              <summary>Xem đáp án</summary>
              <div class="answer">
                <p>\\( MU_X = \\frac{\\partial U}{\\partial X} = Y = 6 \\)</p>
                <p>\\( MU_Y = \\frac{\\partial U}{\\partial Y} = X = 4 \\)</p>
                <p>\\( \\text{MRS}_{XY} = \\frac{MU_X}{MU_Y} = \\frac{6}{4} = \\) <span class="hl-red">1.5</span></p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="types">
          <div class="concept-title">Perfect Substitutes &amp; Perfect Complements</div>
          <div class="concept-en">THẾ PHẨM HOÀN HẢO VÀ HÀNG BỔ SUNG HOÀN HẢO</div>

          <div class="compare">
            <div class="compare-card">
              <h4>Perfect Substitutes (Thế phẩm hoàn hảo)</h4>
              <p><strong>Định nghĩa:</strong> Two goods for which the MRS is <em>constant</em> — the consumer is always willing to trade them at a fixed ratio.</p>
              <p style="margin-top:8px;"><strong>Đặc điểm IC:</strong> Đường thẳng (straight lines), dốc âm hằng số.</p>
            </div>
            <div class="compare-card">
              <h4>Perfect Complements (Hàng bổ sung hoàn hảo)</h4>
              <p><strong>Định nghĩa:</strong> Two goods for which the MRS is 0 or infinite — they must be consumed together in fixed proportions.</p>
              <p style="margin-top:8px;"><strong>Đặc điểm IC:</strong> Hình chữ L (right angles / L-shaped).</p>
            </div>
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "utility",
    chapterNum: "03",
    chapterTitle: "Utility &amp; Marginal Utility",
    chapterSub: "Hàm tiện ích và tiện ích biên",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Utility &amp; Utility Functions</div>
          <div class="concept-en">TIỆN ÍCH VÀ HÀM TIỆN ÍCH</div>
          <div class="concept-body">
            <p><strong>Utility:</strong> Numerical score representing the satisfaction that a consumer gets from a given market basket.</p>
            <p><strong>Utility Function:</strong> Formula that assigns a level of utility to individual market baskets. Quan trọng: chỉ cần thứ hạng (ordinal), không cần giá trị tuyệt đối (cardinal).</p>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="mu">
          <div class="concept-title">Marginal Utility (MU) &amp; Diminishing MU</div>
          <div class="concept-en">TIỆN ÍCH BIÊN VÀ QUY LUẬT TIỆN ÍCH BIÊN GIẢM DẦN</div>
          <div class="concept-body">
            <p><strong>Marginal Utility:</strong> Additional satisfaction obtained from consuming <strong>one additional unit</strong> of a good.</p>
            <p><strong>Diminishing Marginal Utility:</strong> As more of a good is consumed, the consumption of additional amounts will yield <strong>smaller and smaller additions to utility</strong>.</p>
          </div>

          <div class="formula">
            <div class="label">Marginal Utility Formula</div>
            \\[ MU_X = \\frac{\\Delta U}{\\Delta X} = \\frac{\\partial U}{\\partial X} \\]
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 7 — Tổng hợp: MU, MRS, Budget Line</div>
            <div class="ex-q">Lan có thu nhập I = $100. Giá sách \\( P_B = \\$10 \\), giá cà phê \\( P_C = \\$5 \\). Hàm utility \\( U = B \\cdot C \\). Tại giỏ hàng hiện tại: B = 5, C = 10. Lan có đang tối ưu không?</div>
            <details>
              <summary>Xem đáp án & giải thích</summary>
              <div class="answer">
                <p>\\( MU_B = C = 10 \\), \\( MU_C = B = 5 \\) → \\( \\text{MRS}_{BC} = 10/5 = 2 \\)</p>
                <p>Tỷ lệ giá: \\( P_B/P_C = 10/5 = 2 \\)</p>
                <p>Vì \\( \\text{MRS}_{BC} = P_B/P_C = 2 \\) và tiêu hết tiền \\( (10\\times5 + 5\\times10 = 100) \\) → <strong>Lan ĐANG TỐI ƯU!</strong></p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <table>
          <tr><th>Khái niệm</th><th>Tiếng Anh</th><th>Công thức / Đặc điểm</th><th>Bẫy chính</th></tr>
          <tr><td><strong>Đường ngân sách</strong></td><td>Budget Line</td><td>\\( P_X \\cdot X + P_Y \\cdot Y = I \\); Slope = \\( -P_X/P_Y \\)</td><td>Slope âm là đặc trưng</td></tr>
          <tr><td><strong>Thu nhập thay đổi</strong></td><td>Income Change</td><td>Dịch SONG SONG (parallel shift)</td><td>Không xoay!</td></tr>
          <tr><td><strong>Giá thay đổi</strong></td><td>Price Change</td><td>XOAY quanh một intercept (rotate)</td><td>Intercept kia CỐ ĐỊNH</td></tr>
        </table>
        `
      }
    ]
  }
];

// =========================================================================
// SECTION 3 DATA
// =========================================================================
const section3Data = [
  {
    id: "optimum",
    chapterNum: "01",
    chapterTitle: "Consumer Optimum — Lựa chọn tối ưu người tiêu dùng",
    chapterSub: "General Optimisation Problem · Interior & Corner Solutions",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="interior">
          <div class="concept-title">General Optimisation Problem (Interior Solution)</div>
          <div class="concept-en">BÀI TOÁN TỐI ƯU HÓA TỔNG QUÁT — NGHIỆM NỘI</div>
          <div class="concept-body">
            <p>Mục tiêu của người tiêu dùng hợp lý là <strong>tối đa hóa utility</strong> trong khuôn khổ ràng buộc ngân sách.</p>
            <p>① It must be located on the budget line (tiêu hết thu nhập).</p>
            <p>② It must give the consumer the most preferred combination.</p>
          </div>

          <div class="formula">
            <div class="label">Formal Optimisation Problem</div>
            Maximize:  \\( U(x, y) \\)<br>
            Subject to: \\( P_x \\cdot x + P_y \\cdot y = I \\)<br><br>
            Nghiệm nội (Interior Solution):<br>
            \\[ MRS_{xy} = \\frac{P_x}{P_y} \\]<br>
            Tương đương: \\( \\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} \\)
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 1 — Tìm Consumer Optimum (Interior Solution)</div>
            <div class="ex-q">Minh có thu nhập \\( I = \\$120 \\). Giá gạo \\( P_R = \\$2 \\), giá cá \\( P_F = \\$4 \\). Hàm utility \\( U(R, F) = R \\cdot F \\). Tìm rổ hàng tối ưu.</div>
            <details>
              <summary>Xem đáp án chi tiết</summary>
              <div class="answer">
                <p>\\( MRS = F/R = P_R/P_F = 2/4 = 1/2 \\implies R = 2F \\)</p>
                <p>Thay vào ngân sách: \\( 2(2F) + 4F = 120 \\implies 8F = 120 \\implies \\boxed{F^* = 15, R^* = 30} \\)</p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="corner">
          <div class="concept-title">Corner Solution — Nghiệm góc</div>
          <div class="concept-en">KHI NGƯỜI TIÊU DÙNG CHỈ MUA MỘT LOẠI HÀNG HÓA</div>
          <div class="concept-body">
            <p>Nghiệm góc xảy ra khi điểm tối ưu nằm ở góc của đường ngân sách, nghĩa là người tiêu dùng tiêu thụ hoàn toàn chỉ một trong hai hàng hóa (lượng hàng kia bằng 0).</p>
          </div>
          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 3 — Corner Solution với Perfect Substitutes</div>
            <div class="ex-q">An xem Pepsi và Coca-Cola là thế phẩm hoàn hảo tỷ lệ 1:1 (MRS=1). Ngân sách $30. P_Pepsi = $1.50, P_Coca = $1.00. An chọn gì?</div>
            <details>
              <summary>Xem đáp án</summary>
              <div class="answer">
                <p>An chọn toàn bộ Coca-Cola vì giá Coca rẻ hơn và mang lại độ thỏa mãn tương đương Pepsi.</p>
                <p>\\( \\boxed{Coca = 30, Pepsi = 0} \\)</p>
              </div>
            </details>
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "manager",
    chapterNum: "02",
    chapterTitle: "How Managers Strategically Influence Consumer Choices",
    chapterSub: "Chiến lược kinh doanh tác động đến lựa chọn người tiêu dùng",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Influencing Budget Constraints &amp; Preferences</div>
          <div class="concept-en">TÁC ĐỘNG ĐẾN NGÂN SÁCH VÀ SỞ THÍCH</div>
          <div class="compare">
            <div class="compare-card">
              <h4>① Tác động đến Sở thích (Preferences)</h4>
              <p>Quảng cáo, branding, review... dịch chuyển đường bàng quan (IC) ra xa gốc tọa độ hơn đối với sản phẩm mục tiêu.</p>
            </div>
            <div class="compare-card">
              <h4>② Tác động đến Ngân sách (Budget Line)</h4>
              <p>Giảm giá, tặng coupon, tạo combo... làm bẻ cong (kink) hoặc xoay đường ngân sách theo hướng có lợi cho sức mua sản phẩm.</p>
            </div>
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "income-demand",
    chapterNum: "03",
    chapterTitle: "Income Changes &amp; Demand",
    chapterSub: "Thay đổi thu nhập và cầu · Income-Consumption Curve · Engel Curve",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Income-Consumption Curve (ICC)</div>
          <div class="concept-en">ĐƯỜNG THU NHẬP-TIÊU DÙNG</div>
          <p><strong>Income-Consumption Curve:</strong> Curve tracing the utility-maximizing combinations of two goods as a consumer's income changes (with prices held constant).</p>
        </div>
        <div class="concept" id="normal-inferior">
          <div class="concept-title">Normal Goods vs Inferior Goods</div>
          <div class="compare">
            <div class="compare-card">
              <h4>Normal Good (Hàng thông thường)</h4>
              <p>Thu nhập tăng → Cầu tăng (Thịt bò cao cấp, du lịch...)</p>
            </div>
            <div class="compare-card">
              <h4>Inferior Good (Hàng cấp thấp)</h4>
              <p>Thu nhập tăng → Cầu GIẢM (Mì gói, xe buýt công cộng...)</p>
            </div>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="engel">
          <div class="concept-title">Engel Curves</div>
          <p>Đường Engel biểu diễn mối quan hệ giữa thu nhập (trục hoành) và lượng tiêu dùng của một hàng hóa cụ thể (trục tung).</p>
        </div>
        `
      }
    ]
  },
  {
    id: "price-demand",
    chapterNum: "04",
    chapterTitle: "Price Changes &amp; Demand",
    chapterSub: "Thay đổi giá và cầu · Price-Consumption Curve · Demand Curve",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Price-Consumption Curve (PCC)</div>
          <p><strong>Price-Consumption Curve:</strong> Quỹ tích của tất cả các điểm tối ưu khi giá của MỘT hàng hóa thay đổi trong khi giữ nguyên thu nhập và giá hàng hóa còn lại.</p>
          <p>Từ đường PCC, chúng ta trích xuất các cặp giá trị (Giá, Lượng) để vẽ nên đường cầu cá nhân (Demand Curve).</p>
        </div>
        `
      }
    ]
  },
  {
    id: "sub-income",
    chapterNum: "05",
    chapterTitle: "Income &amp; Substitution Effects",
    chapterSub: "Hiệu ứng thay thế và hiệu ứng thu nhập — Phân tích Slutsky/Hicks",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Decomposing the Price Effect</div>
          <div class="compare">
            <div class="compare-card">
              <h4>① Substitution Effect (SE) — Hiệu ứng thay thế</h4>
              <p>Thay đổi trong tiêu dùng do sự biến động của giá tương đối, trong khi độ thỏa mãn (utility) được giữ cố định.</p>
            </div>
            <div class="compare-card">
              <h4>② Income Effect (IE) — Hiệu ứng thu nhập</h4>
              <p>Thay đổi trong tiêu dùng do sức mua thực tế tăng lên khi giá của hàng hóa đó sụt giảm.</p>
            </div>
          </div>
          <div class="formula">
            <div class="label">Slutsky Decomposition</div>
            Total Effect (TE) = Substitution Effect (SE) + Income Effect (IE)<br>
            \\( \\Delta Q_{\\text{total}} = \\Delta Q_{\\text{SE}} + \\Delta Q_{\\text{IE}} \\)
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "giffen",
    chapterNum: "06",
    chapterTitle: "The Giffen Good — Hàng Giffen",
    chapterSub: "Trường hợp ngoại lệ của Luật cầu · Upward-sloping demand curve",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Giffen Good — Định nghĩa và Cơ chế</div>
          <p><strong>Giffen Good:</strong> A good whose demand curve slopes <strong>upward</strong> because the negative income effect is <strong>larger than</strong> the substitution effect.</p>
          <div class="formula">
            <div class="label">Điều kiện để Có Giffen Good</div>
            Hàng phải là hàng cấp thấp (Inferior Good) và có hiệu ứng thu nhập lấn át hoàn toàn hiệu ứng thay thế: \\( |IE| > |SE| \\).
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "s3-exercises-new",
    chapterNum: "Ex",
    chapterTitle: "Bài tập bổ sung Section 3 — Từ Slide &amp; Docx",
    chapterSub: "Exercises from Section 3 PPTX & Docx files",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="exercise">
          <div class="exercise-title">✏️ Slide 15 — Utility function \\( u = x^{0.5} y^{0.5} \\)</div>
          <div class="ex-q">I = 10,000,000 VND. \\( P_x = 10{,}000 \\) VND, \\( P_y = 20{,}000 \\) VND. Tìm lượng cầu tối ưu của hàng X.</div>
          <details>
            <summary>Xem đáp án</summary>
            <div class="answer">
              <p>Áp dụng nguyên lý chia đều ngân sách cho hàm Cobb-Douglas có số mũ bằng nhau:</p>
              <p>Ngân sách cho X = 50% × 10,000,000 = 5,000,000 VND.</p>
              <p>\\( x^* = 5{,}000{,}000 / 10{,}000 = \\mathbf{500 \\text{ units}} \\).</p>
            </div>
          </details>
        </div>
        `
      }
    ]
  }
];

// =========================================================================
// SECTION 4 DATA
// =========================================================================
const section4Data = [
  {
    id: "market",
    chapterNum: "01",
    chapterTitle: "Market Demand — Cầu thị trường",
    chapterSub: "From Individual to Market Demand · Horizontal Summation · Elasticity · Consumer Surplus",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="horizontal">
          <div class="concept-title">Market Demand Curve &amp; Horizontal Summation</div>
          <p>Đường cầu thị trường được tạo ra bằng phương pháp <strong>cộng gộp theo chiều ngang</strong> toàn bộ lượng cầu cá nhân ở từng mức giá: \\( Q_M(P) = \\sum Q_i(P) \\).</p>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="elasticity">
          <div class="concept-title">Price Elasticity of Demand — Độ co giãn theo giá</div>
          <div class="formula">
            \\[ E_p = \\frac{\\%\\Delta Q}{\\%\\Delta P} = \\frac{\\Delta Q}{\\Delta P} \\cdot \\frac{P}{Q} \\]
          </div>
          <p>Tổng doanh thu (TR) đạt cực đại tại điểm cầu co giãn đơn vị: \\( |E_p| = 1 \\) (tương ứng lúc này doanh thu biên \\( MR = 0 \\)).</p>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="cs">
          <div class="concept-title">Consumer Surplus — Thặng dư người tiêu dùng</div>
          <p>Thặng dư người tiêu dùng (CS) được đo lường bằng diện tích hình tam giác nằm phía dưới đường cầu và phía trên mức giá thực tế thị trường.</p>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="ps4">
          <div class="concept-title">Problem Set 4 — Bài tập Toll Bridge</div>
          <div class="ex-q">Hàm cầu cây cầu: \\( P = 15 - \\frac{1}{2}Q \\). Tính CS khi mức phí bằng $0 và khi bằng $5.</div>
          <details>
            <summary>Xem đáp án</summary>
            <div class="answer">
              <p>• Khi P = 0 → Q = 30 → \\( CS = \\frac{1}{2} \\times 30 \\times 15 = \\mathbf{\\$225} \\)</p>
              <p>• Khi P = 5 → Q = 20 → \\( CS = \\frac{1}{2} \\times 20 \\times (15-5) = \\mathbf{\\$100} \\)</p>
              <p>Phần thặng dư mất đi (Loss of CS) = 225 - 100 = $125.</p>
            </div>
          </details>
        </div>
        `
      }
    ]
  },
  {
    id: "worklei",
    chapterNum: "02",
    chapterTitle: "Work-Leisure Decisions — Quyết định làm việc và nghỉ ngơi",
    chapterSub: "Labor Supply · Time Allocation · Backward-Bending Supply Curve",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="budget-wl">
          <div class="concept-title">Work-Leisure Budget Constraint &amp; Optimum</div>
          <div class="formula">
            <div class="label">Full Income Constraint</div>
            \\[ p \\cdot C + w \\cdot F = wT + M \\]
            Trong đó F là thời gian nghỉ ngơi (Leisure), C là tiêu dùng, w là mức lương biên.
          </div>
          <p>Điều kiện lựa chọn tối ưu: \\( \\text{MRS}_{FC} = \\frac{MU_F}{MU_C} = \\frac{w}{p} \\).</p>
          <p>Khi hiệu ứng thu nhập lấn át hiệu ứng thay thế ở mức lương cao, đường cung lao động sẽ xuất hiện đoạn gãy quặt về sau (Backward-Bending Labor Supply Curve).</p>
        </div>
        `
      }
    ]
  },
  {
    id: "inter",
    chapterNum: "03",
    chapterTitle: "Intertemporal Decisions — Quyết định liên thời gian",
    chapterSub: "Two-Period Model · Present Value · Saving vs Borrowing",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="pv">
          <div class="concept-title">Intertemporal Budget Constraint</div>
          <div class="formula">
            \\[ C_0 + \\frac{C_1}{1+r} = M_0 + \\frac{M_1}{1+r} \\]
          </div>
          <p>Mô hình giúp giải thích hành vi phân bổ tiêu dùng qua 2 thời kỳ (Hiện tại C₀ và Tương lai C₁) dựa trên lãi suất thị trường r và tỷ lệ ưa thích thời gian ρ.</p>
        </div>
        `
      }
    ]
  }
];
