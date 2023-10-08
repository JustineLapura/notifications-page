import React from 'react'

interface NotificationHeaderProps {
    unreadCount: number;
    onMarkAllAsRead: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  }

const NotificationHeader = ({ unreadCount, onMarkAllAsRead }: NotificationHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
          <h1 className="text-xl font-black text-gray-900">
            Notifications
            <span className="bg-blue-900 text-white rounded ms-2 px-3 py-1">
              {unreadCount}
            </span>
          </h1>
          <p
            onClick={onMarkAllAsRead}
            className="text-gray-500 cursor-pointer hover:font-semibold"
          >
            Mark all as read
          </p>
        </div>
  )
}

export default NotificationHeader
