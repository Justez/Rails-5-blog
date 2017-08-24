class Comment < ApplicationRecord
    belongs_to :post
    belongs_to :user

    scope :most_recent, -> {order(id: :desc)}

    def created_date
      "Created: #{created_at.strftime('%-H:%-M:%-S %-b %-d, %Y')}"
    end
end
